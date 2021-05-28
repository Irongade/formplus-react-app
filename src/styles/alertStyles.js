import styled from 'styled-components';
import {breakpoints} from './utilStyles'

export const AlertDiv = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    background: #FFF4EA;
`

export const AlertIcon = styled.span`
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    width: 1.25rem;
    height: 1.5rem;
    display: inherit;

    ${breakpoints("margin-left", "rem", [
        { 1011 : 1 },
    ])};

`

export const AlertText = styled.div`
    font-weight: 700;
    line-height: 1.5rem;
    -webkit-margin-end: 0.5rem;
    margin-inline-end: 0.5rem;
`