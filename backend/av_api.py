import requests
import os
from google_api import append_price
import datetime

key = os.environ["AV_KEY"]

TODAY_DATE = datetime.datetime.now().strftime("%x")

def get_quote_close():
    url = f'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=RDDT&apikey={key}'
    r = requests.get(url)
    quote = r.json()['Global Quote']
    return quote

stock_data = get_quote_close()

append_price([
    [
        TODAY_DATE, 
        stock_data['05. price'],
        stock_data['02. open'],
        stock_data['03. high'],
        stock_data['04. low'],
        stock_data['06. volume'],
        stock_data['08. previous close'],
        stock_data['09. change'],
        stock_data['10. change percent'],
        ]
    ])
