import styled, {css} from 'styled-components';
import {breakpoints} from './utilStyles';

export const Text = styled.p`
    display: inline-block;
    font-size: 0.875rem;
    height: 2.5rem;
    padding-top: 20px;
    padding-right: 20px;
    white-space: nowrap;  
    color: ${props => props.theme.text};

    ${
        props => props.fontSizeLarge && css`
            font-size: 1.125rem;
        `
    } 
    ${
        props => props.colorGrey && css`
            color: ${props => props.theme.inputText};
        `
    } 

    ${
        props => props.selectText && css`
            ${breakpoints("height", "", [
                { 500: 'auto' },
            ])};
        `
    } 
`

export const Input = styled.input`
    width: 100%;
    min-width: 0px;
    outline: transparent solid 2px;
    outline-offset: 2px;
    position: relative;
    appearance: none;
    transition: all 0.2s ease 0s;
    font-size: 0.875rem;
    font-family: Circular_Std, sans-serif;
    padding-inline-start: 1rem;
    padding-inline-end: 1rem;
    height: 2.5rem;
    border-radius: 1px;
    border-width: 0.5px;
    border-style: solid;
    border-image: initial;
    border-color: #BDBDBD;
    background: inherit;
    color: ${props => props.theme.inputText};
`
export const InputSpan = styled.div`
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    width: 1.25rem;
    height: 1.5rem;
    display: inherit;
    position: absolute;
    right: -10px;
    z-index: 2;
    padding: 0.5rem;
    background: ${props => props.theme.background};
`

export const SelectDiv = styled.div`
    width: 30%;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    position: relative;
    font-family: Circular_Std, sans-serif;
`

export const SelectLabel = styled.label`
    background: ${props => props.theme.background};
    font-size: 0.75rem;
    position: absolute;
    top: -0.5rem;
    left: 1.5rem;
    z-index: 2;
    padding: 3px;
    color: ${props => props.theme.inputText};
`

export const Select = styled.select`
    width: 100%;
    min-width: 0px;
    outline: 2px solid transparent;
    outline-offset: 2px;
    position: relative;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    padding-bottom: 1px;
    line-height: 1.2;
    font-size: 0.8rem;
    -webkit-padding-start: 10px;
    padding-inline-start: 10px;
    -webkit-padding-end: 2rem;
    padding-inline-end: 2rem;
    height: 2.5rem;
    border-radius: 1px;
    border: 0.5px solid #C4C4C4;
    background: inherit;
    color: ${props => props.theme.selectText};

    option {
        font-weight: normal;
        display: block;
        white-space: nowrap;
        min-height: 1.2em;
        padding: 0px 2px 1px;
    }
`

export const SelectSvgDiv = styled.div`
 width: 1.5rem;
    height: 100%;
    right: 0.5rem;
    position: absolute;
    color: ${props => props.theme.selectText};
    font-size: 1.25rem;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    pointer-events: none;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
`

export const SelectArrowSvg = styled.svg`
    width: 1em;
    height: 1em;
`

export const Slider = styled.label`
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    position: relative;
    width: 3.375rem;
    height: 1.625rem;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 2.125rem;
        background: ${props => props.theme.text};

        &::before {
            position: absolute;
            content: "";
            height: 1.125rem;
            width: 1.125rem;
            left: 4px;
            bottom: 4px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
            border-radius: 50%;
        }
    }

    & input:checked + span {
            background-color: ${props => props.theme.green};
    }

    & input:focus + span {
        box-shadow: 0 0 1px ${props => props.theme.green};
    }

    & input:checked + span::before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
`