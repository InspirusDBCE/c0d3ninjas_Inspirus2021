import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Dimensions } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function DepartmentIcons(props) {
    return (
        <View style={styles.container}>


        </View>
    );
}

export default DepartmentIcons;


const styles = StyleSheet.create({
    container:{

        width:windowWidth/3,
        height:windowWidth/3,
        backgroundColor:"grey",
        borderColor:"black",
        borderWidth:1



    }
    

})