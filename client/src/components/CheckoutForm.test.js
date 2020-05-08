import React from "react";
import { render, fireEvent,  } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {getByText}=render (<CheckoutForm />)
    const formTitle=getByText(/checkout form/i)
    expect(formTitle).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    const {getByRole, getByLabelText, getByTestId}=render(<CheckoutForm />)

    const firstName=getByLabelText(/first name/i)
    const lastName=getByLabelText(/last name/i)
    const address=getByLabelText(/address/i)
    const city=getByLabelText(/city/i)
    const state=getByLabelText(/state/i)
    const zip=getByLabelText(/zip/i)

    const submitButton=getByRole('button')

    fireEvent.change(firstName, {target: {value: 'Big Tyrone'}})
    fireEvent.change(lastName, {target: {value: 'Williams'}})
    fireEvent.change(address, {target: {value: '28231 sw 90 ct'}})
    fireEvent.change(city, {target: {value: 'Miami'}})
    fireEvent.change(state, {target: {value: 'FL'}})
    fireEvent.change(zip, {target: {event: '33156'}})

    fireEvent.click(submitButton)

    const message=getByTestId(/successMessage/i)
    expect(message).toBeInTheDocument();
});
