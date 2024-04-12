#!/usr/bin/env python

import json
import os
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from google.auth.identity_pool import Credentials

SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"]

SPREADSHEET_ID = '1_xsDfFHZSgGANCFFVZGdPMnaCLlDHIB7xi4XYvZz7yQ'
RANGE = 'Tracker!A2:B2'

f = open(os.environ["GOOGLE_APPLICATION_CREDENTIALS"])
key = json.load(f)

def append_price(values, value_input_option="USER_ENTERED"):
    """
    Add price to spreadsheet
    """
    credentials = Credentials.from_info(key)
    append_body = {
        "values": values,
        "range": RANGE,
        "majorDimension": "ROWS",
        }
    try:
        service = build("sheets", "v4", credentials=credentials)

        service.spreadsheets().values().append(
            spreadsheetId=SPREADSHEET_ID,
            range=RANGE,
            body=append_body,
            valueInputOption=value_input_option,
        ).execute()

    except HttpError as error:
        print(error)
