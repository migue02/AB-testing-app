import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';
import SecondaryButton from '../../components/SecondaryButton';

const Home = () => {
    return (
        <View style={styles.container}>
            <PrimaryButton text="Rate us" />
            <SecondaryButton text="Rate us 2" />
        </View>
    );
};

export default Home;
