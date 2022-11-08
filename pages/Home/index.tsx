import { Text, View } from 'react-native';
import React, { FC, useEffect } from 'react';
import styles from './styles';
import { HomeProps } from '../types';
import { useABTesting } from '../../context/ABTesting';

const Home: FC<HomeProps> = (props) => {
    const { navigation } = props;
    const { popupUserData, shouldPopupBeShown } = useABTesting();

    useEffect(() => {
        if (popupUserData && shouldPopupBeShown()) {
            // Timeout to show first the home page and then the popup will be shown
            setTimeout(() => {
                navigation.navigate('ABTesting', { type: popupUserData.type });
            }, 1000);
        }
    }, [popupUserData]);

    return (
        <View style={styles.container}>
            <Text>Home page</Text>
        </View>
    );
};

export default Home;
