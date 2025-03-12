import React from "react";

const MoreInfo = () => (
  <div className="terms-container background-extra-pages text-align-left ">
    <div className="terms-of-use">
      <div>
        <strong>WHAT THIS APP DOES:</strong> The application tracks Reddit's
        stock price, and allows a user to enter in stock information. With this
        information, calculations are performed to help the user understand the
        value of their options and the approximate tax burden related to their
        sale.
      </div>
      <div className="mt-10">
        <strong>WHAT HAPPENS WITH MY INFO:</strong> Accounting for the 3
        different types of stock options (NSOs, ISOs, and RSUs) and their
        varying tax implications, you will be presented with tables estimating
        your tax burden for next year.
        <div className="mt-5">
          The application includes a graph with the historic stock data as well
          as a "price slider" so that you can project at what price would be the
          ideal time to exercise, based on your individual financial situation.
        </div>
      </div>
      <div className="mt-10">
        <strong>DATA PRIVACY:</strong> When clicking submit, your data is sent
        to the next screen. This data is used to make the calculations.
        <div className="mt-5">
          No personal data is preserved, and is erased once the browser is
          reloaded.
        </div>
      </div>
    </div>
  </div>
);

export default MoreInfo;
