import * as React from 'react';

import Screen from '../components/Screen';
import SafetyList from '../components/SafetyList';


export default function SafetyScreen({navigation}) {
    return (
        <Screen>
            <SafetyList navigation={navigation}/>
        </Screen>
    );
};
