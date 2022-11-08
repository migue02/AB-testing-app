import { View } from 'react-native';
import React, { FC } from 'react';
import styles from './styles';
import Test from '../Test';
import Control from '../Control';
import { ABTestingProps } from '../types';

const ABTesting: FC<ABTestingProps> = (props) => {
    const { route, navigation } = props;
    const { type } = route.params;

    return (
        <View style={styles.container}>
            {type === 'control' ? (
                <Control navigation={navigation} />
            ) : (
                <Test navigation={navigation} />
            )}
        </View>
    );
};

export default ABTesting;
