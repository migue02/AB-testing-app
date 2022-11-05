import React, { FC } from 'react';
import Button from '../Button';
import { Colors } from '../../utils';
import styles from './styles';

interface IProps {
    text: string;
}

const PrimaryButton: FC<IProps> = (props) => {
    const { text } = props;

    return (
        <Button
            text={text}
            backgroundColor={Colors.primaryButton.backgroundColor}
            textStyle={styles.text}
        />
    );
};

export default PrimaryButton;
