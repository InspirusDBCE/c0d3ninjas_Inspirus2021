import { doctorName } from "../DummyData/doctorNames"


export function sendSpeciality({navigation, specialityName}){
 // AXIOS TBA
    const list = doctorName
    navigation.navigate("SelectDoctorScreen", {list})



}