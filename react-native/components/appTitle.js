import React from "react";
import { Text, View } from "react-native";
import styles from "./../styles";
import Person1 from "./svgComponents/person_1.js";
import Person2 from "./svgComponents/person2";
import Logo from "./svgComponents/Logo";
import Button from "./button";
import { LinearGradient } from "expo-linear-gradient";

export default function Home({ navigation }) {
  return (
    <View
      style={{
        height: 100 + "%",
        justifyContent: "center",
      }}
    >
      <LinearGradient
        colors={["#6B4E9C", "#4380AD", "#1BB0BD"]}
        start={[0, 0]}
        end={[1, 1]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 100 + "%",
        }}
      />
      <View>
        <View>
          <Text style={styles.TitleText}> Welcome to </Text>
        </View>
        <View style={styles.logo}>
          <Logo />
        </View>
        <View>
          <Text style={styles.SubTitleText}>
            A little joy can change your life
          </Text>
        </View>
        <View style={styles.people}>
          <Person1 />
          <Person2 />
        </View>
        <View>
          <Button
            onPress={() => navigation.navigate("Sign Up")}
            buttonStyle={styles.SeniorButton}
            textStyle={styles.SeiorText}
            title="Continue as Senior"
          />
          <Button
            onPress={() => navigation.navigate("Student Sign Up")}
            buttonStyle={styles.StudentButton}
            textStyle={styles.StudentText}
            title="Continue as Student"
          />
        </View>
      </View>
    </View>
  );
}
