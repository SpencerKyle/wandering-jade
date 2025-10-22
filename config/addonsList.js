import React from "react";
import { ListItem, UnorderedList } from '@chakra-ui/react';
import addonData from '../lib/addons.json';

const AddonsList = () => {
    return (
        <UnorderedList listStylePos='outside'>
            {Object.entries(addonData).map(([key, [addonItem, addonPrice]]) => (
                <ListItem key={key}>
                    <div>{addonItem}: <strong>{addonPrice}</strong></div>
                </ListItem>
            ))}
        </UnorderedList>
    );
};

export default AddonsList;
