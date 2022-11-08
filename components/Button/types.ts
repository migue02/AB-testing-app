import { GestureResponderEvent, TextStyle } from "react-native";

export interface IButton {
    text: string;
    onPress: (event: GestureResponderEvent) => void;
    width?: number | string;
    marginTop?: number;
}

export interface IGenericButton extends IButton {
    text: string;
    backgroundColor: string;
    textStyle: TextStyle;
    height?: number;
}

export interface ITextButton extends IButton {
    isUnderline?: boolean;
    isUpperCase?: boolean;
}
