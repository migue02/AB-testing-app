import { Text, View } from 'react-native';
import React, { FC, useEffect } from 'react';
import styles from './styles';
import { HomeProps } from '../types';
import { useABTesting } from '../../context/ABTesting';
import PrimaryButton from '../../components/PrimaryButton';

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
            {popupUserData ? (
                <View>
                    <Text>POPUP USER DATA</Text>
                    <Text>{`ABTesting used for this user is: ${popupUserData?.type}`}</Text>
                    <Text>
                        {`Popup has been shown to the user: ${popupUserData?.totalShown} time` +
                            (popupUserData?.totalShown === 1 ? '' : 's')}
                    </Text>
                    <Text>{`Installation date for the user is: ${new Date(
                        popupUserData.installationDate
                    ).toDateString()}`}</Text>
                    <Text>{`Last time popup shown to the user: ${new Date(
                        popupUserData?.lastDate
                    ).toDateString()}`}</Text>
                    <Text>
                        Popup{' '}
                        {popupUserData?.hasUserFeedback
                            ? 'has'
                            : `doesn't have`}{' '}
                        user feedback
                    </Text>
                </View>
            ) : (
                <></>
            )}
            {popupUserData ? (
                <>
                    <PrimaryButton
                        text="Launch test ABTesting"
                        onPress={() =>
                            navigation.navigate('ABTesting', {
                                type: 'test',
                            })
                        }
                        marginTop={30}
                        width={'70%'}
                    />
                    <PrimaryButton
                        text="Launch control ABTesting again"
                        onPress={() =>
                            navigation.navigate('ABTesting', {
                                type: 'control',
                            })
                        }
                        marginTop={30}
                        width={'70%'}
                    />
                </>
            ) : null}
        </View>
    );
};

export default Home;
