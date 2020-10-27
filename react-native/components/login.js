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
      <View style={styles.upperThird}>
        <View>
          <Text style={styles.Heading1}>Login</Text>
        </View>
      </View>
      <View style={styles.middleThirid}>
        <TextInput style={styles.TextInput} placeholder="e-mail" />
        <TextInput style={styles.TextInput} placeholder="Password" />
        <View style={{ width: 300, height: 36 }}>
          <TouchableOpacity>
            <Text style={styles.link}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Button
            title="Log In"
            buttonStyle={styles.DefaultButton}
            textStyle={{
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
            }}
          />
        </View>
      </View>
      <View style={styles.lowerThird}>
        <View style={{marginTop:25+'%'}}>
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
    </View>
  );
}
export default Login;
