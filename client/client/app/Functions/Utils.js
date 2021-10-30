import { doctorName } from "../DummyData/doctorNames"
// // import { collections, db } from "./models"

export async function sendSpeciality({navigation, specialityName}){
    // AXIOS TBA?
    // Currently prefering RxDB, experimenting with a tradeoff on speed with security.
    const list = doctorName
    
    // const list = await collections.doctor.find()
    // .where('speciality').eq(specialityName)
    // .exec().toJSON();

    navigation.navigate("SelectDoctorScreen", {list})
}