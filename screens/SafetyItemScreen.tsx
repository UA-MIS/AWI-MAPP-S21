import * as React from 'react';

import { Text } from 'react-native';

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import SafetyItem from '../components/safety-item';
import { SafetyParamList } from '../types';
import { SafetyItemFormat } from '../assets/safety/safety-data';


type SafetyItemScreenRouteProp = RouteProp<SafetyParamList, 'SafetyItemScreen'>;

type SafetyItemScreenNavigationProp =
    StackNavigationProp<SafetyParamList, 'SafetyItemScreen'>;

type Props = {
    route: SafetyItemScreenRouteProp;
    navigation: SafetyItemScreenNavigationProp;
    item: SafetyItemFormat;
};


export default function SafetyItemScreen({ route, navigation }: Props) {

    // console.log(item);

    return (
        <Text>Data</Text>
    );
};