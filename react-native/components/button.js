import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

TouchableOpacity.defaultProps = { activeOpacity: 0.7 };

const Button = ({ onPress, title, textStyle, buttonStyle }) => (
  <TouchableOpacity onPress={onPress} style={buttonStyle}>
    <Text style={textStyle}>{title}</Text>
  </TouchableOpacity>
);

export const SVGButton = ({ onPress, title, textStyle, buttonStyle, SVG }) => (
<TouchableOpacity style={buttonStyle} onPress={onPress}>
      <View style={{width:10+'%'}}>
        {SVG}
        </View>
      <View style={{width:60+'%'}}>
        <Text style={textStyle}>{title}</Text>
      </View>
  </TouchableOpacity>
);

export default Button;
