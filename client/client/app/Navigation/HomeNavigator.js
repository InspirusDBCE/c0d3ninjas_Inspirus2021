import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import UserHomePageScreen from "../Screens/userHomePageScreen";
import AppointmentBookingScreen from "../Screens/appointmentBookingScreen";
import SelectSpecialityScreen from "../Screens/SelectSpecialityScreen";

const Stack = createStackNavigator()


const HomeNavigator = () => (

    <Stack.Navigator
        screenOptions={{
            headerShown:false

        }}
    
    >
       
       <Stack.Screen name="HomeScreen" component={UserHomePageScreen}/>
       <Stack.Screen name="SelectSpecialityScreen" component={SelectSpecialityScreen}/>


    </Stack.Navigator>


)


export default HomeNavigator