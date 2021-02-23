import * as Linking from 'expo-linking';

export default {
    prefixes: [Linking.makeUrl('/')],
    config: {
      screens: {
        Root: {
          screens: {
            Weather: {
              screens: {
                WeatherScreen: 'weather',
              },
            },
            Tides: {
              screens: {
                TidesScreen: 'tides',
              },
            },
            Safety: {
                screens: {
                  SafetyScreen: 'safety'
                },
              }
          },
        },
        NotFound: '*',
      },
    },
  };