import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";

import InputComponent from "./components/InputComponent";
import ButtonComponent from "./components/ButtonComponent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false,
      errors: [],
    };
  }
  handleOnChangeText = name => text => {
    this.setState({ ...this.state, [name]: text });
  };

  handleOnPress = () => {
    console.log("Clicked!");
  };
  render() {
    const { email, password, errors, loading } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <InputComponent
          label="Email"
          secureTextEntry={false}
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          inputStyle={styles.input}
          handleOnChange={this.handleOnChangeText("email")}
        />
        <InputComponent
          label="Password"
          secureTextEntry={true}
          showIconPassword={true}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          handleOnChange={this.handleOnChangeText("password")}
        />

        <ButtonComponent
          title="Login"
          activeOpacity={0.9}
          handleOnPress={this.handleOnPress}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    flex: 1,
    justifyContent: "center",
  },
});
