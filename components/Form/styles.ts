import { StyleSheet } from 'react-native';
import { Colors } from '../../utils';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    innercontainer: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: 10,
        lineHeight: 15,
        alignItems: 'flex-end',
        letterSpacing: 0.24,
        textTransform: 'uppercase',
        color: Colors.secondaryColor,
    },
    input: {
        fontFamily: 'Montserrat-Bold',
        fontWeight: '400',
        fontStyle: 'normal',
        height: 112,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: Colors.secondaryColor,
        borderRadius: 6,
        textAlignVertical: 'top',
        color: Colors.input.color,
        fontSize: 12,
        lineHeight: 17,
    },
    button: {
        marginTop: 40,
        width: 247
    },
});

export default styles;