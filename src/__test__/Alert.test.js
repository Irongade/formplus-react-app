import React from 'react';
import {render, screen} from "@testing-library/react";
import Alert from "../components/Alert";

it('renders correctly', () => {
    render(<Alert />);

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText(/Get started with a free template./)).toBeInTheDocument()
})

