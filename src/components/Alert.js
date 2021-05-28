import React from 'react'

import {Container} from "../styles/globalStyles"
import {AlertDiv, AlertIcon, AlertText} from "../styles/alertStyles";
import {ReactComponent as AlertLogo} from '../assets/alertIcon.svg' ;

const Alert = () => {
    return (
        <Container marginY>
           <AlertDiv role="alert">
               <AlertIcon>
                    <AlertLogo />
               </AlertIcon>
               <AlertText>
                    Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates
               </AlertText>
           </AlertDiv>
        </Container>
    )
}

export default Alert
