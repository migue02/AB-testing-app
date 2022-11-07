import { Text, TextInput, View } from 'react-native';
import { useState, FC } from 'react';
import styles from './styles';
import SecondaryButton from '../SecondaryButton';

interface IProps {
    onSubmit: (text: string) => void;
}

const Form: FC<IProps> = (props) => {
    const { onSubmit } = props;
    const [text, onChangeText] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <Text style={styles.title}>ANY FEEDBACK FOR US?</Text>
                <TextInput
                    multiline
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                ></TextInput>
                <SecondaryButton text="Submit" onPress={() => onSubmit(text)} />
            </View>
        </View>
    );
};

export default Form;
