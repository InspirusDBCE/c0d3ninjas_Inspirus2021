import React from 'react';
import {View, StyleSheet} from 'react-native'


import { Dimensions } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import colors from '../../config/colors';
import UserOptionButtons from './UserOptionButtons';
import { useNavigation } from '@react-navigation/native';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// this component is used to render all the buttons used to select health services

function UserOptions(props) {

    const navigation = useNavigation();  // navigation prop wasnt being passed like idk why so had to use navigation hook


    return (
       <View style={styles.container}>
           <UserOptionButtons 
           heading="Setup Appointments" 
           subHeading="Setup appointments with the healthcare specialist of your choice" 
           icon="stethoscope" 
           iconSize={RFPercentage(10)}
           onPress={() => navigation.navigate('AppointmentBooking')}
        >

           </UserOptionButtons>


           <UserOptionButtons 
           heading="View Appointments"  
           subHeading="View your upcoming appointments" 
           icon="list" 
           iconSize={RFPercentage(5)}>

           </UserOptionButtons>


           <UserOptionButtons 
           heading="Bed Availability"   
           subHeading="View the bed availability at Apollo Hospital" 
           icon="bed" 
           iconSize={RFPercentage(5)}>

           </UserOptionButtons>

           <UserOptionButtons 
           heading="View Prescriptions" 
           subHeading="View and download your doctor ordered prescriptions" 
           icon="newspaper-o" 
           iconSize={RFPercentage(5)}>

           </UserOptionButtons>


       </View>
    );
}

export default UserOptions;


const styles = StyleSheet.create({

container:{
backgroundColor:colors.white,
height:windowHeight/1.7,
width:'100%'



}
    
})