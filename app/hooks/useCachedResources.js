import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

import { createIconSetFromFontello } from '@expo/vector-icons';
import fontelloConfig from '../assets/fonts/config.json';

export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);

    // Load any resources or data needed prior to rendering the app
    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();

                // Load fonts
                await Font.loadAsync({
                    'fontello': require('../assets/fonts/fontello.ttf'),
                    'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf')
                });
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
}

export const Icon = createIconSetFromFontello(fontelloConfig, 'fontello', 'fontello.ttf')
