const crypto = require('crypto'),
    RxDB = require('rxdb');

// RxDB.addPouchPlugin(require('pouchdb-quick-search'));
RxDB.addPouchPlugin(require('pouchdb-adapter-memory'));

/**
 * Asserts a condition, and throws a message on violation.
 * @param {boolean} condition Condition to be asserted.
 * @param {string} message Message to throw on condition violation.
 */
export const assert = (condition, message) => {
    if(!condition) throw message || 'Assertion failed!';
    else return true;
};

/**
 * Generates a random string of characters.
 * @param {number} size Number of random characters to return.
 */
export const generateUUID = (size) => crypto.rng(size || UUIDSize)
 .toString('base64')
 .replace(/\//gi,'.').replace(/\+/gi,'-').replace(/\=/gi,'_')


const doctorSchema = {
    name: 'doctor',
    title: 'Doctor entity schema',
    version: 0,
    description: 'Collection contains doctor details.',
    type: 'object',
    properties: {
        phoneNumber: {
            type: 'string',
            primary: true,
        },
        name: {
            type: 'string',
        },
        speciality: {
            type: 'string',
            enum: [
                'GeneralMedicine',
                'Cardiology',
                'Opthalmology',
                'Pulmonology',
                'Gynaecology',
                'Gastroenterology',
                'Dermatology',
                'Dentistry',
                'Neurology',
            ]
        },
    },
    required: ['name', 'speciality'],
    indexes: ['speciality'],
};

const patientSchema = {
    name: 'patient',
    title: 'Patient schema',
    version: 0,
    description: 'Collection contains patient details.',
    type: 'object',
    properties: {
        phoneNumber: {
            type: 'string',
            primary:true,
        },
        name: {
            type: 'string',
        },
    },
    required: ['name'],
};

const medicationSchema = {
    name: 'medication',
    title: 'Medication entity Schema',
    version: 0,
    description: 'Collection contains medication and prescription details.',
    type: 'object',
    properties: {
        uuid: {
            type: 'string',
            primary: true,
        },
        patient: {
            type: 'string',
            ref: 'patient',
            unique: true,   // TODO: enforce update if already there!
            final: true,
        },
        meds: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    medName: {
                        type: 'string',
                    },
                    dosageAmount: {
                        type: 'string',
                    },
                    frequency: {
                        type: 'number',
                        description: 'Times a day for the dosage.',
                    },
                    fromDate: {
                        type: 'number',
                        description: 'Timestamp to start the medication.',
                    },
                    toDate: {
                        type: 'number',
                        description: 'Timestamp to end the medication.',
                    },
                    reason: {
                        type: 'string',
                        description: 'The doctor explains Why a med was added.'
                    },
                }
            }
        }
    },
    required: ['patient', 'meds'],
    indexes: ['patient'],
};

const bedSchema = {
    name: 'bed',
    title: 'Bed entity Schema',
    version: 0,
    description: 'Collection contains bed details.',
    type: 'object',
    properties: {
        uuid: {
            type: 'string',
            primary: true,
        },
        bedType: {
            type: 'string',
            enum: [
                'ICU',
                'ICCU',
                'Ward',
                'ACRoom',
                'NonACRoom',
                'Daycare',
            ],
        },
        fromDate: {
            type: 'number',
            description: 'Timestamp for the patient to start using the bed.',
        },
        toDate: {
            type: 'number',
            description: 'Timestamp for the patient to end using the bed.',
        },
        patient: {
            type: 'string',
            ref: 'patient',
            unique: true,   // TODO: enforce the unique constraint at service level!
        },
    },
    required: ['bedType', 'fromDate', 'toDate'],
    indexes: ['patient', 'bedType', 'fromDate', 'toDate'],
};

const appointmentSchema = {
    name: 'appointment',
    title: 'Appointment relationship schema',
    version: 0,
    description: 'Collection handles a doctor-patient relationship.',
    type: 'object',
    properties: {
        uuid: {
            type: 'string',
            primary: true,
        },
        doctor: {
            type: 'string',
            ref: 'doctor',
            final: true,
        },
        patient: {
            type: 'string',
            ref: 'patient',
            final: true,
        },
        timeslot: {
            type: 'number',
        },
        progressHistory: {
            type: 'string',
            default: '',
            description: 'Doctors use this field to discuss the interaction and progress of a patient\'s appointment',
        }
    }
};

export const db = RxDB.createRxDatabase({ 
    name: 'bookMyHospital',
    storage: getRxStoragePouch('memory'),
    // adapter: leveldown,
    eventReduce: false,
}).catch(console.error);

export const collections = db.then(database=> database.addCollections({
    doctor: {schema: doctorSchema},
    patient: {schema: patientSchema},
    medication: {schema: medicationSchema},
    bed: {schema: bedSchema},
    appointment: {schema: appointmentSchema},
})).catch(console.error);


// module.exports = {
//     db, collections, 
//     assert, generateUUID,
// }