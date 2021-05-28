import React from 'react';
import {Box} from "../styles/globalStyles";
import {TemplateItemDiv, TemplateItemHeader, TemplateItemText, TemplateItemSkeletonDiv} from "../styles/templateStyles";

export const TemplateItem = ({template}) => {
    return (
        <Box shadow>
            <TemplateItemDiv>
                <TemplateItemHeader>
                    {template.name}
                </TemplateItemHeader>
                <TemplateItemText>
                    {template.description}
                </TemplateItemText>
            </TemplateItemDiv>
            <TemplateItemDiv alignCenter backgroundDark>
                <TemplateItemText m="0" mb="5px" h="0.5rem" colorGreen noPadding>
                    Use Template
                </TemplateItemText>
            </TemplateItemDiv>
        </Box>
    )
}

export const TemplateItemSkeleton = () => {
    return (
        <Box shadow>
            <TemplateItemDiv>
                <TemplateItemSkeletonDiv h="40px">
                </TemplateItemSkeletonDiv>
                <TemplateItemSkeletonDiv h="30px">
                </TemplateItemSkeletonDiv>
            </TemplateItemDiv>
            <TemplateItemDiv alignCenter backgroundDark>
                <TemplateItemSkeletonDiv h="30px">
                </TemplateItemSkeletonDiv>
            </TemplateItemDiv>
        </Box>
    )
}
