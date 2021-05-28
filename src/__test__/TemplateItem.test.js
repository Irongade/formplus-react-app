import React from 'react';
import {render, screen} from "@testing-library/react";
import {TemplateItem} from "../components/TemplateItem";

it('renders correctly', () => {
    const template = {
        name: "hello",
        description: "Lorem ipsum"
    }
    render(<TemplateItem template={template} />);

    expect(screen.getByText('hello')).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum')).toBeInTheDocument();
})

