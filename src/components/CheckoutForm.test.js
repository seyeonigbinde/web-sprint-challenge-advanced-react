import React from "react";
import { render, screen, userEvent, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
test('renders without errors', ()=>{
    render(<CheckoutForm/>);
});

test("form header renders", () => {
    const header = screen.queryByText(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    const firstNameInput = screen.getByLabelText(/first Name:/i);
    userEvent.type(firstNameInput, "Seyet");
    const lastNameInput = screen.getByLabelText(/last Name:/i);
    userEvent.type(lastNameInput, "Onigbinde");
    const addressInput = screen.getByLabelText(/address:/i);
    userEvent.type(addressInput, "Nigeria");
    const cityInput = screen.getByLabelText(/city:/i);
    userEvent.type(cityInput, "Thank you");
    const stateInput = screen.getByLabelText(/state:/i);
    userEvent.type(stateInput, "Thank you");
    const zipInput = screen.getByLabelText(/zip:/i);
    userEvent.type(zipInput, "Thank you");
    const button = screen.getByRole("button", {name:/checkout/i});
    userEvent.click(button);
        waitFor(async ()=>{
                const formDisplay = await screen.findByText("Seyet");
                expect(formDisplay).toBeInTheDocument();
            });
});



