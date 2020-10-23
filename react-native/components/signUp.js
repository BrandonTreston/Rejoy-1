import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles";
import Button, { SVGButton } from "./button";
import GoogleSVG from "./svgComponents/GoogleIcon";
import FacebookSVG from "./svgComponents/FacebookIcon";

export function StudentSignup({ navigation }) {
  return (
    <View style={styles.LoginSignupContainer}>
      <View style={{ marginBottom: 25 + "%" }}>
        <Text style={styles.Heading1}>Let's Get Started</Text>
      </View>
      <View>
        <Text style={styles.Heading2}>Please Log In To Proceed</Text>
      </View>
      <View>
        <Button
          title="Sign in via MyNYIT"
          buttonStyle={styles.NYITSignIn}
          textStyle={{
            textAlign: "center",
            color: "#505050",
            fontWeight: "bold",
          }}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 12,
            marginRight: 15 + "%",
            marginLeft: 15 + "%",
            marginTop: 5 + "%",
            textAlign: "center",
          }}
        >
          Log in using your New York Institute of Technology username and
          password.
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
        <Text style={styles.loginLink2}>Tap here for more options</Text>
      </TouchableOpacity>
    </View>
  );
}

function Signup({ navigation }) {
  return (
    <View style={styles.LoginSignupContainer}>
      <View style={{ marginBottom: 40 + "%" }}>
        <Text style={styles.Heading1}>Let's Get Started</Text>
      </View>
      <View>
        <SVGButton
          SVG={<GoogleSVG />}
          title="Sign up with Google"
          buttonStyle={styles.GoogleSignup}
          textStyle={{ textAlign: "center" }}
        />
      </View>
      <View>
        <View>
          <SVGButton
            SVG={<FacebookSVG />}
            title="Sign up with Facebook"
            buttonStyle={styles.FacebookSignup}
            textStyle={{ textAlign: "center", color: "#FFF" }}
          />
        </View>
        <View>
          <Button
            title="Sign up with e-mail"
            buttonStyle={styles.DefaultButton}
            textStyle={{ textAlign: "center", color: "#FFF" }}
            onPress={() => navigation.navigate("Create Account")}
          />
        </View>
      </View>

      <View style={{ marginTop: 60 + "%" }}>
        <Text>Already have an account?</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginLink}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Signup;
