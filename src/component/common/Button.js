import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({onPress, children}) => {

    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={onPress}
        >
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );  
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 17,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom:10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight:5,
    }
}

export { Button};