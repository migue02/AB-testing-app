import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Home from './pages/Home';
import { useCallback, useEffect, useState } from 'react';
import { Colors } from './utils';
import { MonitoringDataProvider } from './context/MonitoringData';
import {
    ABTestingDataClient,
    createABTestingDataClient,
} from './client/ABTestingDataClient';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [clients, setClients] = useState<ABTestingDataClient[]>();
    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        const testDataClient = createABTestingDataClient('test');
        const controlDataClient = createABTestingDataClient('control');

        prepare();
        setClients([testDataClient, controlDataClient]);
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded || !clients) {
        return null;
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <MonitoringDataProvider clients={clients}>
                <Home />
            </MonitoringDataProvider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
