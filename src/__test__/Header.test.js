import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import Header from "../components/Header";

it('renders correctly', () => {
    const {queryByTestId, queryByPlaceholderText} = render(<Header handleFilter={() => {}} inputValue={"hello"} handleInputChange={() => {}} categorySelectRef={() => {}} orderSelectRef={() => {}} dateSelectRef={() => {}} setToggleDarkMode={() => {}} toggleDarkMode={() => {}} />);

    expect(queryByTestId('input-element')).toBeTruthy();
    expect(queryByTestId('category-select-element')).toBeTruthy();
    expect(queryByPlaceholderText('Search Templates')).toBeTruthy();
})

describe('Input value', () => {
    it('updates on change', () => {
        const {queryByPlaceholderText} = render( <Header handleInputChange={() => {}} />);

        const searchInput = queryByPlaceholderText('Search Templates');

        fireEvent.change(searchInput, {target: {value: 'test'}});

        expect(searchInput.value).toBe('test');
    })
})


describe('Select', () => {
    it('updates on change', () => {
        const {queryByTestId} = render( <Header handleFilter={() => {}} categorySelectRef={() => {}} />);

        const selectElement = queryByTestId('category-select-element');

        fireEvent.change(selectElement, {target: {defaultValue: 'test'}});

        expect(selectElement.defaultValue).toBe('test');
    })

    it('handle filter function fires on change event', () => {
        const handleFilter = jest.fn()
        const {queryByTestId} = render( <Header handleFilter={handleFilter} categorySelectRef={() => {}} />);

        const selectElement = queryByTestId('category-select-element');

        fireEvent.change(selectElement);

        expect(handleFilter).toHaveBeenCalledTimes(1);
    })
})