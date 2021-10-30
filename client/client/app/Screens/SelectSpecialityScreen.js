import React from 'react';
import {View, StyleSheet} from 'react-native'
import Screen from '../Components/Screen';
import BlueCard from '../Components/SelectSpeciality/BlueCard';
import DepartmentIcons from '../Components/SelectSpeciality/DepartmentIcons';
import AppText from '../config/AppText';

import { Dimensions } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AntDesign, FontAwesome, Entypo, FontAwesome5,MaterialCommunityIcons     } from '@expo/vector-icons'; 
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/native';
import { sendSpeciality } from '../Functions/Utils';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function SelectSpecialityScreen(props) {

    const navigation = useNavigation();  // navigation prop wasnt being passed like idk why so had to use navigation hook

    return (
        <Screen>
            <BlueCard></BlueCard>
            <View style={ styles.selectDepartment}>
                <DepartmentIcons iconComponent={<AntDesign 
                name="medicinebox" 
                size={RFPercentage(7)} 
                color="purple" />} 
                
                specialityName="General Medicine">

                    
                </DepartmentIcons>
                <DepartmentIcons
                    iconComponent={<FontAwesome   
                    name="heartbeat" 
                    size={RFPercentage(7)} 
                    color="tomato" />} 
                    
                    specialityName="Cardiology"
                    onPress={() => sendSpeciality({navigation, specialityName:"Cardiology"})}
                    
                    >
                

                </DepartmentIcons>


                 <DepartmentIcons
                    iconComponent={<Entypo    
                    name="eye" 
                    size={RFPercentage(7)} 
                    color="grey" />} 
                    
                    specialityName="Opthalmology">
                

                </DepartmentIcons>


                <DepartmentIcons
                    iconComponent={<MaterialCommunityIcons     
                    name="lungs" 
                    size={RFPercentage(7)} 
                    color="lightgreen" />} 
                    
                    specialityName="pulmonology">
                

                </DepartmentIcons>

                <DepartmentIcons
                    iconComponent={<FontAwesome5     
                    name="baby" 
                    size={RFPercentage(7)} 
                    color="#FFE5B4" />} 
                    
                    specialityName="Gynaecology">
                

                </DepartmentIcons>

                <DepartmentIcons
                    iconComponent={<MaterialCommunityIcons     
                    name="stomach" 
                    size={RFPercentage(7)} 
                    color="#e75480" />} 
                    
                    specialityName="Gastroenterology">
                

                </DepartmentIcons>

                <DepartmentIcons
                    iconComponent={<MaterialCommunityIcons      
                    name="head" 
                    size={RFPercentage(7)} 
                    color="#C4A484" />} 
                    
                    specialityName="Dermatology">
                

                </DepartmentIcons>

                <DepartmentIcons
                    iconComponent={<FontAwesome5     
                    name="teeth-open" 
                    size={RFPercentage(6)} 
                    color="pink" />} 
                    
                    specialityName="Dentistry">
                

                </DepartmentIcons>

                <DepartmentIcons
                    iconComponent={<MaterialCommunityIcons     
                    name="brain" 
                    size={RFPercentage(7)} 
                    color="skyblue" />} 
                    
                    specialityName="Neurology">
                

                </DepartmentIcons>
            </View>

        </Screen>
    );
}

const styles = StyleSheet.create({
  
    selectDepartment:{
        backgroundColor:colors.white,
        width:windowWidth,
        height:windowHeight/1.2,
        flexDirection:'row',
        flexWrap:'wrap'
    }


})


export default SelectSpecialityScreen;