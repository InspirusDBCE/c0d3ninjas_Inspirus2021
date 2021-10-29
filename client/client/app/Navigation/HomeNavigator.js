import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import UserHomePageScreen from "../Screens/userHomePageScreen";
import AppointmentBookingScreen from "../Screens/appointmentBookingScreen";

const Stack = createStackNavigator()


const HomeNavigator = () => (

    <Stack.Navigator>
       
       <Stack.Screen name="HomeScreen" component={UserHomePageScreen}/>
       <Stack.Screen name="AppointmentBooking" component={AppointmentBookingScreen}/>


    </Stack.Navigator>


)


export default HomeNavigator