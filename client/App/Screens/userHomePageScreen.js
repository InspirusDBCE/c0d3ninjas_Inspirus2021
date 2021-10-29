import React from 'react';
import {View, StyleSheet} from 'react-native'
import InfoCard from '../Components/userHomeScreenComponents/infoCard';
import AppText from '../config/AppText';

import colors from '../config/colors';

function UserHomePageScreen(props) {
    return (
            <View style={styles.container}>

                <InfoCard>
                    <AppText>Good Morning</AppText>

                </InfoCard>

            </View>


    );
}

const styles = StyleSheet.create({

    container:{

        backgroundColor:colors.primary


    }

    

})

export default UserHomePageScreen;

