import React from "react";
import { View, Text } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import styles from "./../styles";

function CreateAccount() {
  return (
    <View style={styles.LoginSignupContainer}>
      <View style={{ marginBottom: 10 + "%" }}>
        <Text style={styles.Heading1}>Create Account</Text>
      </View>
      <TextInput style={styles.TextInput} placeholder="Enter Your First Name" />
      <TextInput style={styles.TextInput} placeholder="Enter Your Email Address" />
      <TextInput style={styles.TextInput} placeholder="Enter Your Password" />
      <View style={{ width: 300, height: 36, marginTop: 10 }}></View>
    </View>
  );
}

export default CreateAccount;
