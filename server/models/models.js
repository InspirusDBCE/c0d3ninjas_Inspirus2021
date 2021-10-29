const path = require('path'),
    crypto = require('crypto'),
    rxdb = require('rxdb'),
    leveldown = require('leveldown');

RxDB.addRxPlugin(require('pouchdb-adapter-leveldb'));
RxDB.addRxPlugin(require('pouchdb-quick-search'));


/**
 * Generates a random string of characters.
 * @param {number} size Number of random characters to return.
 */
 const generateUUID = (size) => crypto.rng(size || UUIDSize)
 .toString('base64')
 .replace(/\//gi,'.').replace(/\+/gi,'-').replace(/\=/gi,'_')


const doctorSchema = {
    name: 'doctor',
    title: 'Doctor schema',
    version: 0,
    description: 'Collection contains doctor details.',
    type: 'object',
    properties: {
        uuid: {
            type: 'string',
            primary: true,
        },
        name: {
            type: 'string',
        },
        specialization: {
            type: 'string',
            enum: [
                'General Medicine',
                'Cardiology',
                'Opthalmology',
                'Nephrology',
                'Gynaecology',
                'Gastroenterology',
                'Dermatology',
                'Dentistry',
                'Neurology',
            ]
        },
    },
    required: ['name', 'specialization'],
    indexes: ['specialization'],
};

const patientSchema = {
    name: 'patient',
    title: 'Patient schema',
    version: 0,
    description: 'Collection contains patient details.',
    type: 'object',
    properties: {
        uuid: {
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
    title: 'Medication Schema',
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
    title: 'Bed Schema',
    version: 0,
    description: 'Collection contains bed and prescription details.',
    type: 'object',
    properties: {
        uuid: {
            type: 'string',
            primary: true,
        },
        patient: {
            type: 'string',
            ref: 'patient',
            final: true,
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
            description: 'Timestamp to start the medication.',
        },
        toDate: {
            type: 'number',
            description: 'Timestamp to end the medication.',
        },
    },
    required: ['patient', 'bedType', 'fromDate', 'toDate'],
    indexes: ['patient', 'bedType', 'fromDate', 'toDate'],
};

