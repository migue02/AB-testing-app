import { View } from 'react-native';
<<<<<<< Updated upstream
import React, { useState } from 'react';
=======
import React, { FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
>>>>>>> Stashed changes
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';
import SecondaryButton from '../../components/SecondaryButton';
import Modal from '../../components/Modal';
import Test from '../Test';
import Control from '../Control';
import useVisibleModal from '../../hooks/useModal';
<<<<<<< Updated upstream

const Home = () => {
    const [selectedModal, setSelectedModal] = useState<'test' | 'control'>();
    const [isModalVisible, setModalVisible, toggle] = useVisibleModal(false);
=======
import { HomeProps } from '../types';

const Home: FC<HomeProps> = (props) => {
    const [selectedModal, setSelectedModal] = useState<'test' | 'control'>();
    const [isModalVisible, , toggle] = useVisibleModal(false);
    const { navigation } = props;
>>>>>>> Stashed changes

    return (
        <View style={styles.container}>
            <PrimaryButton
                text="Test modal"
                onPress={() => {
                    setSelectedModal('test');
                    toggle();
                }}
            />
            <SecondaryButton
                text="Control modal"
                onPress={() => {
                    setSelectedModal('control');
                    toggle();
                }}
            />
            <Modal
                isVisible={isModalVisible}
                handleClose={() => setModalVisible(false)}
                hasCloseButton={selectedModal === 'test'}
            >
<<<<<<< Updated upstream
                {selectedModal === 'control' ? <Control /> : <Test />}
=======
                {selectedModal === 'control' ? (
                    <Control closeModal={() => toggle()} />
                ) : (
                    <Test
                        onGiveFeedback={() => {
                            toggle();
                            navigation.navigate('ContactUS');
                        }}
                        closeModal={() => toggle()}
                    />
                )}
>>>>>>> Stashed changes
            </Modal>
        </View>
    );
};

export default Home;
