import React from 'react';
import {View, StyleSheet} from 'react-native'
import Screen from '../Components/Screen';
import BlueCard from '../Components/SelectSpeciality/BlueCard';
import DepartmentIcons from '../Components/SelectSpeciality/DepartmentIcons';
import AppText from '../config/AppText';

import { Dimensions } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function SelectSpecialityScreen(props) {
    return (
        <Screen>
            <BlueCard></BlueCard>
            <View style={ styles.selectDepartment}>
                <DepartmentIcons></DepartmentIcons>
                <DepartmentIcons></DepartmentIcons>
                <DepartmentIcons></DepartmentIcons>
                <DepartmentIcons></DepartmentIcons>
                <DepartmentIcons></DepartmentIcons>
                <DepartmentIcons></DepartmentIcons>
                <DepartmentIcons></DepartmentIcons>
                <DepartmentIcons></DepartmentIcons>
                <DepartmentIcons></DepartmentIcons>
            </View>

        </Screen>
    );
}

const styles = StyleSheet.create({
  
    selectDepartment:{
        backgroundColor:"orange",
        width:windowWidth,
        height:windowHeight/1.2,
        flexDirection:'row',
        flexWrap:'wrap'
    }


})


export default SelectSpecialityScreen;