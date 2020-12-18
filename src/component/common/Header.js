// Import libraries form making component
import React from 'react';
import {Text, View} from 'react-native';

// Make component
const Header = (props) => {
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    //shadow properties don't work here, solve it later
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.3,
    borderWidth: 2,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
};

// Make the component available to other parts of the app
export { Header };
