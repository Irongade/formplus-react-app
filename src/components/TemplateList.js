import React from 'react';

import {TemplateItem, TemplateItemSkeleton} from './TemplateItem';
import {AlertIcon} from "../styles/alertStyles";
import {ReactComponent as AlertLogo} from '../assets/alertIcon.svg';

import {Container, Flex} from "../styles/globalStyles";
import {Text} from "../styles/headerStyles";
import {TemplateListGrid} from "../styles/templateStyles";

const TemplateList = ({categorySelectRef, filteredResults, isLoading}) => {
    return (
        <Container>
            <Flex spaceBetween>
                <Text fontSizeLarge>
                    {`${categorySelectRef.current && categorySelectRef.current.value} Templates`}
                </Text>
                <Text style={{paddingRight: '0'}} colorGrey>
                    {`${filteredResults.length} templates found`}
                </Text>
            </Flex>
            <TemplateListGrid>
                {
                    isLoading && <>
                        <TemplateItemSkeleton />
                        <TemplateItemSkeleton />
                        <TemplateItemSkeleton />
                        <TemplateItemSkeleton />
                        <TemplateItemSkeleton />
                        <TemplateItemSkeleton />
                    </>
                }

                {
                    !isLoading && filteredResults.length > 0 && filteredResults.map((template, index) => <TemplateItem key={index} template={template} />)
                }

                {
                    !isLoading && filteredResults.length < 1 && <Flex>
                        <AlertIcon>
                            <AlertLogo />
                        </AlertIcon>
                        <Text> Oops! No Template found!  </Text>
                    </Flex>
                }
            </TemplateListGrid>
        </Container>
    )
}

export default TemplateList;
