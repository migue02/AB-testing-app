import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Navigation from './navigation';
import { useCallback, useEffect, useState } from 'react';
import { Colors, getPopupUserData, PopUpUserData } from './utils';
import {
    ABTestingDataClient,
    createABTestingDataClient,
} from './client/ABTestingDataClient';
import { ABTestingProvider } from './context/ABTesting';
import { MonitoringDataProvider } from './context/MonitoringData';
import Loading from './pages/Loading';

SplashScreen.preventAutoHideAsync();

const App = () => {
    const [clients, setClients] = useState<ABTestingDataClient[]>([]);
    const [userLoaded, setUserLoaded] = useState(false);
    const [userPopUpData, setPopupUserData] = useState<PopUpUserData>();

    useEffect(() => {
        const addClient = (userPopUpData: PopUpUserData) => {
            const abDataClient = createABTestingDataClient(userPopUpData.type);
            setClients([abDataClient]);
        };

        const getUserPopUpData = async () => {
            getPopupUserData()
                .then((userPopUpData) => {
                    setPopupUserData(userPopUpData);
                    addClient(userPopUpData);
                })
                .finally(() => {
                    setUserLoaded(true);
                });
        };

        getUserPopUpData();
    }, []);

    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    });

    useEffect(() => {
        const prepare = async () => {
            await SplashScreen.preventAutoHideAsync();
        };

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            {!fontsLoaded || !userLoaded ? (
                <Loading />
            ) : (
                <ABTestingProvider popupUserData={userPopUpData}>
                    <MonitoringDataProvider clients={clients}>
                        <Navigation />
                    </MonitoringDataProvider>
                </ABTestingProvider>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
