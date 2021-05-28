import styled, {css} from "styled-components";
import {breakpoints} from './utilStyles';

export const Container = styled.div`
    flex-grow: 1;
    margin: 0 auto;
    padding: 0 32px;
    position: relative;
    width: auto;
    height: 100%;
    @media (min-width: 1024px) {
        max-width: 960px;
    }
    @media (min-width: 1216px) {
        max-width: 1152px;
    }
    @media (min-width: 1408px) {
        max-width: 1216px;
    }
    ${props => props.fluid && css`
        padding: 0;
        margin: 0;
        max-width: 100%;
    `}
    ${
        props => props.marginY && css`
           margin-top: 2rem;
           margin-bottom: 2rem;
        `
    }
`

export const Box = styled.div`
    position: relative;
    height: auto;
    width: auto;

     ${
        props => props.shadow && css`
            box-shadow: ${props => props.theme.shadow};
        `
    }
     ${
        props => props.mx && css`
           margin-left: ${props => props.mx};
           margin-right: ${props => props.mx};

           ${breakpoints("margin-left", "", [
                { 500: '0' },
            ])};
            ${breakpoints("margin-right", "", [
                { 500: '0' },
            ])};
        `
    }

`

export const Flex = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;

    ${
        props => props.header && css`
            ${breakpoints("flex-direction", "", [
                { 730: 'column' },
            ])};
        `
    }

    ${
        // descriptor props for the searchInput flex in the header
        props => props.searchFlex && css`
            ${breakpoints("justify-content", "", [
                { 730: 'space-between' },
            ])};
        `
    }

    ${
        // descriptor props for the selectFlex flex in the header
        props => props.selectFlex && css`
            ${breakpoints("flex-direction", "", [
                { 500: 'column' },
            ])};
        `
    }

    ${
        props => props.directionColumn && css`
            flex-direction: column;
        `
    }
    ${
        props => props.halfWidth && css`
            width: 50%;
            ${breakpoints("width", "", [
                { 730: '100%' },
            ])};
        `
    }
      ${
        props => props.w && css`
            width: ${props => props.w};
        `
    }
    ${
        props => props.spaceBetween && css`
            justify-content: space-between;
        `
    }
     ${
        props => props.flexEnd && css`
            justify-content: flex-end;
        `
    }
      ${
        props => props.justifyCenter && css`
            justify-content: center;
        `
    }
     ${
        props => props.alignTop && css`
            align-items: flex-start;
        `
    }
     ${
        props => props.noHeight && css`
            height: 0;
        `
    }
    ${
        props => props.p && css`
            padding: ${props => props.p};
        `
    }
`