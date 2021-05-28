import React from 'react';
import {render, screen} from "@testing-library/react";
import Pagination from "../components/Pagination";

it('renders correctly', () => {
    render(<Pagination />);

    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.getByText('Previous')).toBeInTheDocument();
})

