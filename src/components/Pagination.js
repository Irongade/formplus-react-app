import React from 'react';
import {Container, Flex, Box} from "../styles/globalStyles"
import {PaginationText, PaginationArrowDiv} from '../styles/paginationStyles'
import {ReactComponent as RightArrowLogo} from '../assets/rightArrow.svg' ;

const Pagination = () => {
    return (
        <Container marginY>
            <Box mx="5rem">
                <Flex spaceBetween>
                    <PaginationText>
                        Previous
                    </PaginationText>

                    <PaginationText>
                        <span> 1 </span>
                        of 1
                    </PaginationText>

                    <PaginationText lastChild>
                        Next
                        <PaginationArrowDiv>
                            <RightArrowLogo />
                        </PaginationArrowDiv>
                    </PaginationText>

                </Flex>
            </Box>
        </Container>
    )
}

export default Pagination
