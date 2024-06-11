# Reddit Tracker

This project arose out of a need to exercise stock options granted by a former employer. The application tracks the price of Reddit's stock price, and allows a user to enter in a variety of financial information. With this information, calculations are performed to help the user understand the value of their options and the approximate tax burden related to their sale.

Given the 3 different types of stock options (NSOs, ISOs, and RSUs), their varying tax implications are taken into account and the appropriate calculations are made. The application also includes a graph with the historic stock data as well as a "price slider" so that a user can project at what price would be the ideal time to exercise, based on their individual financial situation.

# Structure of the Application

## Acquiring the Stock Information

Financial data is acquired using the AlphaVantage API, and then written to a Google Sheet using the corresponding API. A cron job is scheduled using GitHub Actions to run at 5:30 pm ET to record the closing stock price. The job authenticates using Workload Identity Federation, and then runs the `av_api.py` and `google_api.py` scripts. 

## Backend

A node.js backend was created in order to keep Google credentials private when calling the Google API to read from the Google Sheet. A function reads the data from the Google sheet and makes it available at an endpoint.

# Frontend

A Next JS application written using React was created. This application calls the backend upon loading to get the stock data. A user is originally prompted to enter in their stock option information in a modal. When submitted, the necessary calculations are made to populate the tables. A chart was included on the page, created using Chart.js. Several UI components were created using Material UI, including the Slider and Modal.

# Requirements
- npm
- node.js

# Running Reddit Tracker Locally

Fork the repo.

Open a terminal window. The current version of the front end points to a node.js backend hosted at `render.com`, so you will only run the frontend locally.

Run the following commands in the terminal:

```
cd opt-tracker
npm run dev
```

The website should now be available locally at [http://localhost:3000](http://localhost:3000)

# Contact

Email: `ddabrowiecki@yahoo.com`
[Project Link](http://www.github.com/ddabrowiecki/Tracker)

# License

Distributed under the MIT License.
