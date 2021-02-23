import { SafetyItemFormat } from './assets/safety/safety-data';

export type RootStackParamList = {
    Root: undefined;
    NotFound: undefined;
};
  
export type BottomTabParamList = {
    Weather: undefined;
    Tides: undefined;
    Safety: undefined;
};
  
export type WeatherParamList = {
    WeatherScreen: undefined;
};

export type TidesParamList = {
    TidesScreen: undefined;
};

export type SafetyParamList = {
    SafetyScreen: undefined;
    SafetyItemScreen: { item: SafetyItemFormat };
};
