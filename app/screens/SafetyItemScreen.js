import * as React from 'react';

import Screen from '../components/Screen';
import SafetyItem from '../components/SafetyItem';

export default function SafetyItemScreen({ route }) {

    const { item } = route.params;

    return (
        <Screen>
            <SafetyItem
                id={item.id}
                title={item.title}
                image={item.image}
                description={item.description}
                link={item.link}
            />
        </Screen>
    );
};