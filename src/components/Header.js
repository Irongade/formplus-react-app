import React from 'react'

import {Container, Flex} from "../styles/globalStyles"
import {Input, InputSpan, Text, Select, SelectDiv, SelectLabel, SelectSvgDiv, Slider} from "../styles/headerStyles"
import {ReactComponent as InputLogo} from "../assets/searchIcon.svg"

const Header = ({handleFilter, inputValue, handleInputChange,  categorySelectRef, orderSelectRef, dateSelectRef, setToggleDarkMode, toggleDarkMode}) => {
    return (
        <Container marginY>
            <Flex header>
                <Flex searchFlex halfWidth>
                    <Flex w="50%">
                        <Input data-testid="input-element" type="text" placeholder="Search Templates" value={inputValue} onChange={e => handleInputChange(e.target.value)}  />
                        <InputSpan>
                            <InputLogo />
                        </InputSpan>
                    </Flex>
                    <Flex style={{marginLeft: "1rem"}}>
                        <Text style={{margin: "0", marginRight: "0.5rem", fontSize: "0.875rem", paddingRight: "0"}}>Dark mode:</Text>
                        <Slider onChange={() => setToggleDarkMode(!toggleDarkMode) }>
                            <input type="checkbox" />
                            <span></span>
                        </Slider>
                    </Flex>
                </Flex>

                <Flex selectFlex halfWidth>
                        <Text selectText colorGrey>
                            Sort By: 
                        </Text>
                    <Flex spaceBetween w="100%">
                        <SelectDiv w="">
                            <SelectLabel>Category</SelectLabel>
                            <Select data-testid="category-select-element" ref={categorySelectRef} defaultValue="All" onChange={handleFilter}>
                                <option value="All">All</option>
                                <option value="Education">Education</option>
                                <option value="E-commerce">E-commerce</option>
                                <option value="Health">Health</option>
                            </Select>
                            <SelectSvgDiv>
                                <svg viewBox="0 0 24 24" role="presentation" className="chakra-select__icon" focusable="false" aria-hidden="true" style={{width: '1em', height: '1em', color: 'currentcolor'}}><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                            </SelectSvgDiv>
                        </SelectDiv>

                        <SelectDiv w="">
                            <SelectLabel>Order</SelectLabel>
                            <Select ref={orderSelectRef} defaultValue="Default" onChange={handleFilter}>
                                <option value="Default">Default</option>
                                <option value="Ascending">Ascending</option>
                                <option value="Descending">Descending</option>
                            </Select>
                            <SelectSvgDiv>
                                <svg viewBox="0 0 24 24" role="presentation" className="chakra-select__icon" focusable="false" aria-hidden="true" style={{width: '1em', height: '1em', color: 'currentcolor'}}><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                            </SelectSvgDiv>
                        </SelectDiv>

                        <SelectDiv w="">
                            <SelectLabel>Date</SelectLabel>
                            <Select ref={dateSelectRef} defaultValue="Default" onChange={handleFilter}>
                                <option value="Default">Default</option>
                                <option value="Ascending">Ascending</option>
                                <option value="Descending">Descending</option>
                            </Select>
                            <SelectSvgDiv>
                                <svg viewBox="0 0 24 24" role="presentation" className="chakra-select__icon" focusable="false" aria-hidden="true" style={{width: '1em', height: '1em', color: 'currentcolor'}}><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                            </SelectSvgDiv>
                        </SelectDiv>
                    </Flex>
                </Flex>

            </Flex>
        </Container>
    )
}

export default Header
