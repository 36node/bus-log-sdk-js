const faker = require("faker");
const _ = require("lodash");
const {
  DcStatus,
  DoorStatus,
  HandbrakeStatus,
  KeyPosition,
  Shift,
  VehicleStatus,
} = require("./constants");

const makeRecord = () => ({
  time: 1540902953574,
  msg: "handle rdb data",
  session: "z2-NYoZCXXc",
  seq: 749482,
  platform: "yutong",
  command: "REALTIME_REPORT",
  flag: "COMMAND",
  vin: "LZYTAGBW2E1054491",
  encrypt: "NONE",
  length: 127,
  body: {
    at: "2018-10-30T12:36:00.000Z",
    vehicle: {
      status: faker.random.arrayElement(VehicleStatus),
      chargeStatus: "UNCHARGED",
      mode: "ELECTRIC",
      speed: 0,
      mileage: 178407.5,
      voltage: 570.5,
      current: -31,
      soc: 0.57,
      dcStatus: faker.random.arrayElement(DcStatus),
      shift: faker.random.arrayElement(Shift),
      resistance: 16822,
      aptv: 0,
      brake: 0.01,
    },
    motors: [
      {
        no: 1,
        status: "READY",
        controlTemp: 0,
        speed: 0,
        torque: 0,
        temp: 0,
        voltage: 0,
        current: 0,
      },
    ],
    location: {
      state: 0,
      lng: faker.random.number({ min: 121, max: 122, precision: 0.00001 }),
      lat: faker.random.number({ min: 31, max: 32, precision: 0.00001 }),
    },
    extreme: {
      maxVoltageSubSysNo: 1,
      maxVoltageSingNo: 63,
      maxVoltage: 3.263,
      minVoltageSubSysNo: 1,
      minVoltageSingNo: 91,
      minVoltage: 3.25,
      maxNtcSubSysNo: 1,
      maxNtcNo: 2,
      maxNtc: 30,
      minNtcSubSysNo: 1,
      minNtcNo: 78,
      minNtc: 24,
    },
    alarm: {
      maxLevel: 0,
      uas: {
        ressChargeOver: false,
        motorTemp: false,
        highVolMuteStatus: false,
        motorControlTemp: false,
        dcdcStatus: false,
        brake: false,
        dcdcTemp: false,
        insulation: false,
        batteryBadConsistency: false,
        ressNotMatch: false,
        socJump: false,
        socOver: false,
        batteryLow: false,
        batteryOver: false,
        socLow: false,
        ressVolLow: false,
        ressVolOver: false,
        batteryTempOver: false,
        tempDiff: false,
      },
      ressLen: 0,
      ressList: [],
      mortorLen: 0,
      mortorList: [],
      engineLen: 0,
      engineList: [],
      otherLen: 0,
      otherList: [],
    },
    customExt: {
      dataLen: 48,
      pressure1: 0,
      pressure2: 0,
      batteryVoltage: 0,
      dcov: -900,
      dcoc: -900,
      cv: 570.5,
      rc: 5522.6,
      cp: 0,
      totalCharge: 0,
      totalDischarge: 0,
      bpiRes: 0,
      bniRes: 0,
      motorContTemp: 0,
      airMode: "OFF",
      airTemp: 0,
      insideTemp: 0,
      outsideTemp: 0,
      middleDoorStatus: faker.random.arrayElement(DoorStatus),
      frontDoorStatus: faker.random.arrayElement(DoorStatus),
      handbrakeStatus: faker.random.arrayElement(HandbrakeStatus),
      keyPosition: faker.random.arrayElement(KeyPosition),
    },
  },
});

/**
 * 生成车辆历史数据
 *
 * @param {number} count record number to be generated, max 100000
 */
const generateRecords = count => _.range(count).map(() => makeRecord());

module.exports = {
  generateRecords,
};
