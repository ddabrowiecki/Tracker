# Reddit Tracker

[Visit Reddit Tracker](http://reddit-tracker.vercel.app)

This project arose out of a need to exercise stock options granted by a former employer. The application tracks the price of Reddit's stock price, and allows a user to enter in a variety of financial information. With this information, calculations are performed to help the user understand the value of their options and the approximate tax burden related to their sale.

Given the 3 different types of stock options (NSOs, ISOs, and RSUs), their varying tax implications are taken into account and the appropriate calculations are made. The application also includes a graph with the historic stock data as well as a "price slider" so that a user can project at what price would be the ideal time to exercise, based on their individual financial situation.

# Demo

## Form to enter stock option information

A user is first greeted by this page, prompting them to enter in their stock option information as well as tax bracket and expected income. For the demo, we have simply invented the numbers to show the calculations.\
<img width="785" alt="Screenshot 2025-03-13 202740" src="https://github.com/user-attachments/assets/4e536e85-59ae-478f-a9cb-af3f5cf5352f" />\
**MOBILE:**
<img width="119" alt="Screenshot 2025-03-13 204310" src="https://github.com/user-attachments/assets/6dfe2654-92df-440e-8787-41b06ef5e2bc" />

## Page explainer
If users are curious about what the web app does or want to know more about how their data is used, they can click "Learn More" to go to this page\
<img width="703" alt="Screenshot 2025-03-13 202849" src="https://github.com/user-attachments/assets/030e63dd-80b2-4dfe-8b14-421a7d3cede6" />

## Main page

After clicking submit, the main page is displayed. First, a user sees the current stock price and a graph tracking the stock over time.\
<img width="923" alt="Screenshot 2025-03-13 203759" src="https://github.com/user-attachments/assets/a6985792-ee62-4995-9191-a3dd11006d0b" />\

**MOBILE:**\
<img width="120" alt="Screenshot 2025-03-13 204033" src="https://github.com/user-attachments/assets/7e5e0231-f331-4df2-91a2-e6d1f7bf9f3b" />\
There is an option to enable a price slider to recalculate the table below, so that a user can understand the difference in tax burden based on a different stock price.\  
<img width="482" alt="Screenshot 2025-03-13 203822" src="https://github.com/user-attachments/assets/74c942d2-2887-48f0-a627-0ac53bced272" />

## The tax table

Here a user sees the rough calculation of taxes. The table is split up to help the user understand the value of currently owned stocks and the tax burden on stocks yet to be exercised (based on today's stock price).\
<img width="933" alt="Screenshot 2025-03-13 202812" src="https://github.com/user-attachments/assets/c377e25a-5044-4a1f-ab96-6b3be3926ae8" />

## The disclaimer

Any public website related to financial calculations needs a good disclaimer. Of course, this website does not constitute tax advice!   
<img width="745" alt="Screenshot 2025-03-13 202830" src="https://github.com/user-attachments/assets/ba2051cf-5f8a-40dc-86be-08c2468671de" />


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
