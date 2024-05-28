/** @jest-environment jsdom */

import FinancialInfoModal from "../components/FinancialInfoModal";
import {
  screen,
  render,
  fireEvent,
  getByRole,
  within,
} from "@testing-library/react";

const expectedFinData = {
  estimatedSalary: 80000,
  filingStatus: "headOfHousehold",
  isoPurchasePrice: 1000,
  isoSharesToBuy: 1000,
  isoSharesToBuyPurchasePrice: 20000,
  isosOwned: 100,
  nsoSharesToBuy: 1000,
  nsoSharesToBuyPurchasePrice: 15000,
  nsosOwned: 2000,
  rsusOwned: 1000,
};

const setup = () => {
  const closeModal = jest.fn();
  render(<FinancialInfoModal open={true} closeModal={closeModal} />);
  const isosOwned = screen.getByLabelText(/enter isos owned/i);
  const isoPrice = screen.getByLabelText(
    /how much did you pay for these isos/i
  );
  const rsusOwned = screen.getByLabelText(/enter rsus owned/i);
  const nsosOwned = screen.getByLabelText(/enter nsos owned/i);
  const isosLeft = screen.getByLabelText(/how many isos do you have left/i);
  const nsosLeft = screen.getByLabelText(/how many nsos do you have left/i);
  const isosTotalPay = screen.getByLabelText(
    /what total do you need to pay to buy your isos/i
  );
  const nsosTotalPay = screen.getByLabelText(
    /what total do you need to pay to buy your nsos/i
  );
  const income = screen.getByLabelText(/how much do you plan to make/i);
  //   const filingStatus = screen.getByLabelText(/filing status/i);
  const filingStatus = screen.getByRole("combobox");

  return {
    isosOwned,
    isoPrice,
    rsusOwned,
    nsosOwned,
    isosLeft,
    nsosLeft,
    isosTotalPay,
    nsosTotalPay,
    income,
    filingStatus,
    closeModal,
  };
};

describe("FinancialInfoModal", () => {
  it("creates a financial data object", () => {
    const {
      isosOwned,
      isoPrice,
      rsusOwned,
      nsosOwned,
      isosLeft,
      nsosLeft,
      isosTotalPay,
      nsosTotalPay,
      income,
      filingStatus,
      closeModal,
    } = setup();
    fireEvent.change(isosOwned, { target: { value: "100" } });
    fireEvent.change(isoPrice, { target: { value: "1000" } });
    fireEvent.change(rsusOwned, { target: { value: "1000" } });
    fireEvent.change(nsosOwned, { target: { value: "2000" } });
    fireEvent.change(isosLeft, { target: { value: "1000" } });
    fireEvent.change(nsosLeft, { target: { value: "1000" } });
    fireEvent.change(isosTotalPay, { target: { value: "20000" } });
    fireEvent.change(nsosTotalPay, { target: { value: "15000" } });
    fireEvent.change(income, { target: { value: "80000" } });
    fireEvent.mouseDown(filingStatus);
    fireEvent.click(
      within(screen.getByRole("listbox")).getByText(/head of household/i)
    );
    fireEvent.click(
      screen.getByRole("button", { name: /submit information/i })
    );

    expect(closeModal).toHaveBeenCalledWith(expectedFinData);
  });
});
