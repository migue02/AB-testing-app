import { StyleSheet } from "react-native";
import { Colors } from "../../utils";

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.modal.backgroundColorOutside,
    },
    modalView: {
        margin: 24,
        backgroundColor: Colors.modal.backgroundColor,
        borderRadius: 20,
        padding: 24,
        borderColor: Colors.modal.bordeColor,
        borderWidth: 0.5,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.027,
        shadowRadius: 8,
        elevation: 8,
    },
    closeButton: {
        position: 'absolute',
        right: 24,
        top: 24
    }
});