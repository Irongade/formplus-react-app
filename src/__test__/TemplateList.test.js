import React from 'react';
import {render, screen} from "@testing-library/react";
import TemplateList from "../components/TemplateList";

it('renders correctly', () => {
    const categorySelectRef = {current: ""}
    const filteredResults = [];
    const isLoading = false;

    render(<TemplateList categorySelectRef={categorySelectRef} filteredResults={filteredResults} isLoading={isLoading} />);

    expect(screen.getByText(/Oops! No Template found!/)).toBeInTheDocument()
})

