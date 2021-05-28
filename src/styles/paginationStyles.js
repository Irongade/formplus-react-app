import styled, {css} from 'styled-components';
import {breakpoints} from './utilStyles';

export const PaginationText = styled.div`
    display: inline-block;
    font-size: 1.125rem;
    height: 2.5rem;
    padding-top: 20px;
    padding-right: 20px;
    white-space: nowrap;  
    color: ${props => props.theme.paginationText};
    font-family: Circular_Std, sans-serif;
    font-weight: 500;

    ${
        props => props.lastChild && css`
        padding-right: 0;
        `
    }

    ${breakpoints("padding-right", "", [
        { 500: '10px' },
    ])};

    span {
        padding: 10px;
        border: 0.5px solid ${props => props.theme.paginationText};
        border-radius: 5px;
        margin-right: 10px;
        text-align: center;
        padding-left: 13px;
        ${breakpoints("padding", "", [
        { 300: '5px' },
    ])};
    }
`

export const PaginationArrowDiv = styled.div`
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    width: 1rem;
    height: 1rem;
    display: inline-block;
    margin-left: 5px;
    text-align: center;
    svg {
        padding-top: 2px;
        /* fill: ${props=> props.theme.paginationText} */
    }
`