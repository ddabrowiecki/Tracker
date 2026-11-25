#!/usr/bin/env python3
"""Fetch RDDT daily prices for the requested date range as CSV."""

import csv
import json
import os
import sys
from datetime import date
from decimal import Decimal
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import urlopen

START_DATE = date(2026, 9, 2)
END_DATE = date(2026, 11, 23)
FIELDS = [
    "Date",
    "Price at Close",
    "Price at Open",
    "High",
    "Low",
    "Volume",
    "Previous Close",
    "Change",
    "Change Percent",
]


def fetch_daily_series(api_key: str) -> dict:
    query = urlencode(
        {
            "function": "TIME_SERIES_DAILY",
            "symbol": "RDDT",
            "outputsize": "compact",
            "apikey": api_key,
        }
    )
    request_url = f"https://www.alphavantage.co/query?{query}"

    try:
        with urlopen(request_url, timeout=30) as response:
            payload = json.load(response)
    except HTTPError as error:
        raise RuntimeError(
            f"Alpha Vantage returned HTTP {error.code}: {error.reason}"
        ) from None
    except URLError as error:
        raise RuntimeError(f"Could not reach Alpha Vantage: {error.reason}") from None

    series = payload.get("Time Series (Daily)")
    if not isinstance(series, dict):
        message = (
            payload.get("Error Message")
            or payload.get("Note")
            or payload.get("Information")
            or "No daily price data was returned."
        )
        raise RuntimeError(f"Alpha Vantage request failed: {message}")

    return series


def build_rows(series: dict) -> list[dict]:
    rows = []
    previous_close = None

    for date_text, values in sorted(series.items()):
        trading_date = date.fromisoformat(date_text)
        close = Decimal(values["4. close"])

        if START_DATE <= trading_date <= END_DATE:
            if previous_close is None:
                raise RuntimeError(
                    "The response does not include the trading day's previous close."
                )

            change = close - previous_close
            change_percent = change / previous_close * 100
            rows.append(
                {
                    "Date": date_text,
                    "Price at Close": f"{close:.2f}",
                    "Price at Open": f"{Decimal(values['1. open']):.2f}",
                    "High": f"{Decimal(values['2. high']):.2f}",
                    "Low": f"{Decimal(values['3. low']):.2f}",
                    "Volume": values["5. volume"],
                    "Previous Close": f"{previous_close:.2f}",
                    "Change": f"{change:.2f}",
                    "Change Percent": f"{change_percent:.2f}%",
                }
            )

        previous_close = close

    if not rows:
        raise RuntimeError("No trading days were found in the requested date range.")

    return rows


def main() -> int:
    api_key = os.environ.get("AV_KEY")
    if not api_key:
        print(
            "Set the AV_KEY environment variable to your Alpha Vantage API key.",
            file=sys.stderr,
        )
        return 1

    try:
        rows = build_rows(fetch_daily_series(api_key))
    except RuntimeError as error:
        print(str(error), file=sys.stderr)
        return 1

    writer = csv.DictWriter(sys.stdout, fieldnames=FIELDS, lineterminator="\n")
    writer.writeheader()
    writer.writerows(rows)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
