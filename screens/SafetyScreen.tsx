import * as React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import SafetyList from '../components/safety-list';
import { SafetyParamList } from '../types';

type SafetyScreenNavigationProp =
    StackNavigationProp<SafetyParamList, 'SafetyScreen'>;

type Props = {
    navigation: SafetyScreenNavigationProp;
}

export default function SafetyScreen({navigation}: Props) {
    return (
        <SafetyList navigation={navigation}/>
    );
};