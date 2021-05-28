import styled, {css, keyframes } from 'styled-components';
import {breakpoints} from './utilStyles'

export const TemplateListGrid = styled.div`
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(3, minmax(0px, 1fr));

    ${breakpoints("grid-template-columns", "", [
        { 730: 'repeat(2, minmax(0px, 1fr))' },
        { 500: 'repeat(1, minmax(0px, 1fr))' },

    ])};
`

export const TemplateItemDiv = styled.div`
    background: ${props => props.theme.background};
    display: flex;
    flex-direction: column;
    width: auto;
    padding: 1rem;
    color: black;
    ${
        props => props.backgroundDark && css`
            background: ${props => props.theme.templateDivDarkBg};
        `
    }

    ${
        props => props.alignCenter && css`
            justify-items: center;
        `
    }
`
export const TemplateItemText = styled.p`
    width: auto;
    font-family: Inter, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    height: 2rem;
    color:  ${props => props.theme.text};

    ${
        props => props.h && css`
            height: ${props => props.h};
        `
    }
    ${
        props => props.m && css`
            margin: ${props => props.m};
        `
    }
     ${
        props => props.mb && css`
            margin-bottom: ${props => props.mb};
        `
    }
    ${
        props => props.noPadding && css`
            padding: 0;
        `
    }
    ${
        props => props.colorGreen && css`
            color: ${props => props.theme.green};
        `
    }
`

export const TemplateItemHeader = styled.h3`
    width: 100%;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.33;
    margin-top: 0;
    margin-bottom: 0;
    color:  ${props => props.theme.headerText};
`

const animation = keyframes`
    0%  {
        border-color: #EDF2F7;
        background: #EDF2F7;
    }
    100% {
        border-color: #A0AEC0;
        background: #A0AEC0;
    }
`

export const TemplateItemSkeletonDiv = styled.h3`
    opacity: 0.7;
    border-radius: 2px;
    border-color: #EDF2F7;
    background: #A0AEC0;
    -webkit-animation: 0.8s linear infinite alternate ${animation};
    animation: 0.8s linear infinite alternate ${animation};
    box-shadow:none;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    cursor: default;
    color: transparent;
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    ${
        props => props.h && css`
            height: ${props => props.h};
        `
    }
`
