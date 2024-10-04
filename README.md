# Reddit Tracker

This project arose out of a need to exercise stock options granted by a former employer. The application tracks the price of Reddit's stock price, and allows a user to enter in a variety of financial information. With this information, calculations are performed to help the user understand the value of their options and the approximate tax burden related to their sale.

Given the 3 different types of stock options (NSOs, ISOs, and RSUs), their varying tax implications are taken into account and the appropriate calculations are made. The application also includes a graph with the historic stock data as well as a "price slider" so that a user can project at what price would be the ideal time to exercise, based on their individual financial situation.

# Demo

## Form to enter stock option information

A user is first greeted by this page, prompting them to enter in their stock option information as well as tax bracket and expected income. For the demo, we have simply invented the numbers to show the calculations.
<img width="859" alt="Screenshot 2024-10-03 233557" src="https://github.com/user-attachments/assets/0ddcd6fe-79ec-4864-bb2c-8bd030540759">

## Main page

After clicking submit, the main page is displayed. First, a user sees the current stock price and a graph tracking the stock over time.
<img width="879" alt="Screenshot 2024-10-03 233338" src="https://github.com/user-attachments/assets/e190d37c-eadc-41a4-95bb-f9cc1283b6a5">

There is an option to enable a price slider to recalculate the table below, so that a user can understand the difference in tax burden based on a different stock price.  

<img width="503" alt="Screenshot 2024-10-03 233443" src="https://github.com/user-attachments/assets/773f2922-942b-410e-9d22-9d9ea542b279">

## The tax table

Here a user sees the rough calculation of taxes. The table is split up to help the user understand the value of currently owned stocks and the tax burden on stocks yet to be exercised (based on today's stock price).
<img width="927" alt="Screenshot 2024-10-03 233656" src="https://github.com/user-attachments/assets/c2b65d93-f2f8-4ca8-a752-c7ab8efcd46a">
<img width="932" alt="Screenshot 2024-10-03 233730" src="https://github.com/user-attachments/assets/6bcd5c40-a7ad-411f-878f-e9658260dea3">

## The disclaimer

Any public website related to financial calculations needs a good disclaimer. Of course, this website does not constitute tax advice!   

<img width="670" alt="Screenshot 2024-10-03 233811" src="https://github.com/user-attachments/assets/7c1bd16e-d2ae-4555-9ed9-ac32abf15560">



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
