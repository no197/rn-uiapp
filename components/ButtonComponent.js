import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const ButtonComponent = ({
  containerStyle,
  buttonStyle,
  textStyle,
  handleOnPress,
  ...props
}) => {
  return (
    <TouchableOpacity style={{ ...styles.buttonContainer, ...containerStyle }}>
      <Button
        {...props}
        buttonStyle={{ ...styles.button, ...buttonStyle }}
        onPress={handleOnPress}
        textStyle={{ ...styles.textStyle, ...textStyle }}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  button: {
    backgroundColor: "#1d1d1d",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 70,
  },
});

export default ButtonComponent;
