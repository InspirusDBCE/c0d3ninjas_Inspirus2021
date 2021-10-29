import React from 'react';
import {View, StyleSheet} from 'react-native'
import InfoCard from '../Components/userHomeScreenComponents/infoCard';
import AppText from '../config/AppText';

import colors from '../config/colors';

import { Dimensions } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import UserOptions from '../Components/userHomeScreenComponents/userOptions';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


// main user homepage which consistest of the blue card all all the options the user gets to select 


function UserHomePageScreen({navigation}) {
    return (
            <View style={styles.container}>

                <InfoCard userName="Akash"/>

                <View style={styles.headingText}>
                    <AppText style={styles.fontstyle}>Our Health {"\n"}Services</AppText>
                </View>
                
                <UserOptions>


                </UserOptions>
                    


            </View>


    );
}

const styles = StyleSheet.create({

    container:{

        backgroundColor:colors.white


    },


    headingText:{
        marginTop:windowHeight/40,
        width:windowWidth/3,
        backgroundColor:colors.white,
        marginLeft:windowWidth/30

    },




    fontstyle:{

        color:colors.primary,
        fontSize:RFPercentage(4),
        fontWeight:'bold'



    }






    

})

export default UserHomePageScreen;

