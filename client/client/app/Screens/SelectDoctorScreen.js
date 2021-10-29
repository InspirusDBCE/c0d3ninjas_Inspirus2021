import React from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import BlueCardDoctor from '../Components/SelectSpeciality/BlueCardDoctor';

import DoctorCard from '../Components/SelectSpeciality/doctorCard';

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/native';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function SelectDoctorScreen({route}) {
    return (
            <View style={styles.container}>
                <BlueCardDoctor></BlueCardDoctor>
                <FlatList   data={route.params.list} 
                            keyExtractor={item=>item.uuid.toString()}        
                            renderItem={({item}) => <DoctorCard doctorName={item.name}/>}

                    />


            </View>
    );
}

export default SelectDoctorScreen;


const styles = StyleSheet.create({
    container:{
        height:windowHeight,
        width:windowWidth,
        backgroundColor:colors.white,
        


    }
    
})






{/* <Text style={{color:"black"}}>{JSON.stringify (route.params.list[0])}</Text> */}
