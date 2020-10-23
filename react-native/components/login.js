import React from "react";
import { View, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from "./../styles";
import Button, { SVGButton } from "./button";
import FacebookSVG from "./svgComponents/FacebookIcon";
import GoogleSVG from "./svgComponents/GoogleIcon";
import CheckBox from "@react-native-community/checkbox";

function Login() {
  return (
    <View style={styles.LoginSignupContainer}>
      <View style={{ marginBottom: 10 + "%" }}>
        <Text style={styles.Heading1}>Login</Text>
      </View>
      <TextInput style={styles.TextInput} placeholder="e-mail" />
      <TextInput style={styles.TextInput} placeholder="Password" />
      <View style={{ width: 300, height: 36, marginTop: 10 }}>
        <TouchableOpacity>
          <Text style={styles.link}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 20 + "%" }}>
        <Button
          title="Log In"
          buttonStyle={styles.DefaultButton}
          textStyle={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}
        />
      </View>
      <View style={{ marginBottom: 45 + "%" }}>
        <View>
          <SVGButton
            SVG={<GoogleSVG />}
            title="Login with Google"
            buttonStyle={styles.GoogleSignup}
            textStyle={{ textAlign: "center" }}
          />
        </View>
        <View>
          <SVGButton
            SVG={<FacebookSVG />}
            title="Login with Facebook"
            buttonStyle={styles.FacebookSignup}
            textStyle={{ textAlign: "center", color: "#FFF" }}
          />
        </View>
      </View>
    </View>
  );
}
export default Login;
