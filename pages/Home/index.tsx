import { View } from 'react-native';
import React, { FC, useState } from 'react';
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';
import SecondaryButton from '../../components/SecondaryButton';
import Modal from '../../components/Modal';
import Test from '../Test';
import Control from '../Control';
import useVisibleModal from '../../hooks/useModal';
import { HomeProps } from '../types';

const Home: FC<HomeProps> = (props) => {
    const [selectedModal, setSelectedModal] = useState<'test' | 'control'>();
    const [isModalVisible, , toggle] = useVisibleModal(false);
    const { navigation } = props;

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
                handleClose={() => toggle()}
                hasCloseButton={selectedModal === 'test'}
            >
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
            </Modal>
        </View>
    );
};

export default Home;
