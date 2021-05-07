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
    expect(firstNameInput).toBeInTheDocument();

    const lastNameInput = screen.getByPlaceholderText(/last Name/i);
    userEvent.type(lastNameInput, "Onigbinde");
    expect(lastNameInput).toBeInTheDocument();
    const addressInput = screen.getByPlaceholderText(/address/i);
    userEvent.type(addressInput, "Nigeria");
    expect(addressInput).toBeInTheDocument();
    const cityInput = screen.getByPlaceholderText(/city/i);
    userEvent.type(cityInput, "Lekki");
    expect(cityInput).toBeInTheDocument();
    const stateInput = screen.getByPlaceholderText(/state/i);
    userEvent.type(stateInput, "Lagos");
    expect(stateInput).toBeInTheDocument();
    const zipInput = screen.getByPlaceholderText(/zip/i);
    userEvent.type(zipInput, "23401");
    expect(zipInput).toBeInTheDocument();
    
    const button = screen.getByRole("button");
    userEvent.click(button);
        const firstNameText = screen.queryByText(/Seye/i);
        expect(firstNameText).toBeInTheDocument()
});




