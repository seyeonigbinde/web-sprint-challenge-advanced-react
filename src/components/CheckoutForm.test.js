import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
test("form header renders", () => {
    render(<CheckoutForm/>);
    const header = screen.queryByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);
    const firstNameInput = screen.getByPlaceholderText(/first Name/i);
    userEvent.type(firstNameInput, "Seye");
    const lastNameInput = screen.getByPlaceholderText(/last Name/i);
    userEvent.type(lastNameInput, "Onigbinde");
    const addressInput = screen.getByPlaceholderText(/address/i);
    userEvent.type(addressInput, "Nigeria");
    const cityInput = screen.getByPlaceholderText(/city/i);
    userEvent.type(cityInput, "Lekki");
    const stateInput = screen.getByPlaceholderText(/state/i);
    userEvent.type(stateInput, "Lagos");
    const zipInput = screen.getByPlaceholderText(/zip/i);
    userEvent.type(zipInput, "23401");
    
    const button = screen.getByRole("button");
    userEvent.click(button);
        const firstNameText = screen.queryByText(/Seye/i);
        expect(firstNameText).toBeInTheDocument()
});




