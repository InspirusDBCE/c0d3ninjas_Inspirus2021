import React from 'react';
import { Text, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    MavenPro_400Regular,
    MavenPro_500Medium,
    MavenPro_600SemiBold,
    MavenPro_700Bold,
    MavenPro_800ExtraBold,
    MavenPro_900Black,
} from '@expo-google-fonts/maven-pro';
import colors from './colors';



// I want complete control over this apps UI, so the font will have to be exactly the same across all platforms.


function AppText({ children, style, size, ...otherProps }) {
    // otherprops is used as a spread operator to pass props like numberOfLines to Text component in apptext
    let [fontsLoaded] = useFonts({                                                  //loading fonts that have been imported with expo
        MavenPro_400Regular,
        MavenPro_500Medium,
        MavenPro_600SemiBold,
        MavenPro_700Bold,
        MavenPro_800ExtraBold,
        MavenPro_900Black,
    });



    if (fontsLoaded === false) {
        //fontsloaded is used to ensure that custom font has been imported successfully else apploading is used to reload the app
        return (

            <AppLoading />

        )



    }



    else {
        // imports additional styles to override the default one ive made below

        return (


            <Text style={[styles.fontbelow, style]}{...otherProps}>{children}</Text>


        );


    }
}


const styles = StyleSheet.create({                                                                                          //actual font is entered here, can be overriden when provided with a style prop by consumer of the component 


    fontbelow: {
        fontSize: 70,
        color: colors.black,
        fontFamily: 'MavenPro_400Regular',
        flexWrap: 'wrap'



    }
})




export default AppText;