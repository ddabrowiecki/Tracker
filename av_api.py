import requests
import json
import os
from google_api import append_price
import datetime

f = os.environ.get('AVI_KEY')
print(f)

TODAY_DATE = datetime.datetime.now().strftime("%x")

def get_quote_close():
    url = f'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=RDDT&apikey={key}'
    r = requests.get(url)
    quote = r.json()
    return quote['Global Quote']['05. price']

# append_price([[TODAY_DATE, get_quote_close()]])
print(get_quote_close())
