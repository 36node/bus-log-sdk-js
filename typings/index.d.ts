export = SDK;

declare class SDK {
  constructor(opts?: SDK.Options);

  base: string;
  token: string;
  auth: string;

  vehicle: SDK.VehicleAPI;
}

declare namespace SDK {
  export interface Options {
    base?: string;
    token?: string;
  }

  export interface VehicleAPI {
    /**
     * create records
     */
    createRecords(req: CreateRecordsRequest): Promise<CreateRecordsResponse>;
    /**
     * List all records of an vehicle
     */
    listRecords(req: ListRecordsRequest): Promise<ListRecordsResponse>;
  }

  type CreateRecordsRequest = {
    body: TBOXCommand;
  };

  type CreateRecordsResponse = {
    body: Record;
  };

  type ListRecordsRequest = {
    vehicleId: string;

    query: {
      limit?: number;
      offset?: number;
      select?: number;

      filter: {
        at: {
          $gt?: string;
          $lt?: string;
        };
        command?: string;
        type?: string;
      };
    };
  };

  type ListRecordsResponse = {
    body: [Record];
    headers: {
      xTotalCount: number;
    };
  };

  type Err = {
    code: string;
    message: string;
  };
  type TBOXCommand = {
    request: {};
    response: {};
    msg: string;
  };
  type Record = {
    session: string;
    seq: number;
    time: number;
    platform: string;
    msg: string;
    errors: [
      {
        code: string;
        message: string;
      }
    ];
    command: string;
    flag: string;
    vin: string;
    encrypt: string;
    length: number;
    body: {
      at: string;
      sn: number;
      iccid: string;
      subSysNm: number;
      subSysNmLen: number;
      subSysSn: [string];
      alarm: {
        maxLevel: number;
        uas: {
          ressChargeOver: boolean;
          motorTemp: boolean;
          highVolMuteStatus: boolean;
          motorControlTemp: boolean;
          dcdcStatus: boolean;
          brake: boolean;
          dcdcTemp: boolean;
          insulation: boolean;
          batteryBadConsistency: boolean;
          ressNotMatch: boolean;
          socJump: boolean;
          socOver: boolean;
          batteryLow: boolean;
          batteryOver: boolean;
          socLow: boolean;
          ressVolLow: boolean;
          ressVolOver: boolean;
          batteryTempOver: boolean;
          tempDiff: boolean;
        };
        ressLen: number;
        ressList: [
          {
            type: number;
            code: number;
            level: number;
          }
        ];
        mortorLen: number;
        mortorList: [
          {
            type: number;
            code: number;
            level: number;
          }
        ];
        engineLen: number;
        engineList: [
          {
            type: number;
            code: number;
            level: number;
          }
        ];
        otherLen: number;
        otherList: [
          {
            type: number;
            code: number;
            level: number;
          }
        ];
      };
      customExt: {
        dataLen: number;
        pressure1: number;
        pressure2: number;
        batteryVoltage: number;
        dcov: number;
        dcoc: number;
        dcTemp: number;
        acTemp: number;
        lftp: number;
        lftt: number;
        rftp: number;
        rftt: number;
        lr1tp: number;
        lr1tt: number;
        lr2tp: number;
        lr2tt: number;
        rr1tp: number;
        rr1tt: number;
        rr2tp: number;
        rr2tt: number;
        cv: number;
        rc: number;
        cp: number;
        totalCharge: number;
        totalDischarge: number;
        instantPower: number;
        bpiRes: number;
        bniRes: number;
        apTemp: number;
        motorContTemp: number;
        airMode: "OFF" | "WIND" | "HEATING" | "REFRIGERATION" | "ABNORMAL";
        airTemp: number;
        insideTemp: number;
        outsideTemp: number;
        middleDoorStatus: "CLOSE" | "OPEN" | "ABNORMAL";
        frontDoorStatus: "CLOSE" | "OPEN" | "ABNORMAL";
        handbrakeStatus: "OFF" | "ON" | "ABNORMAL";
        keyPosition: "OFF" | "ACC" | "ON" | "START";
      };
      extreme: {
        maxVoltageSubSysNo: number;
        maxVoltageSingNo: number;
        maxVoltage: number;
        minVoltageSubSysNo: number;
        minVoltageSingNo: number;
        minVoltage: number;
        maxNtcSubSysNo: number;
        maxNtcNo: number;
        maxNtc: number;
        minNtcSubSysNo: number;
        minNtcNo: number;
        minNtc: number;
      };
      location: {
        state: number;
        lng: number;
        lat: number;
      };
      motor: [
        {
          no: number;
          status: "CONSUMPTION" | "GENERATION" | "OFF" | "READY" | "ABNORMAL";
          controlTemp: number;
          speed: number;
          torque: number;
          temp: number;
          voltage: number;
          current: number;
        }
      ];
      vehicle: {
        status: "ON" | "OFF" | "OTHER" | "ABNORMAL";
        chargeStatus: "PARK_CHARGING" | "MOVE_CHARGING" | "UNCHARGED" | "CHARGED" | "ABNORMAL";
        mode: "ELECTRIC" | "MIXED" | "FUEL" | "ABNORMAL";
        speed: number;
        mileage: number;
        voltage: number;
        current: number;
        soc: number;
        dcStatus: "ON" | "OFF" | "ABNORMAL";
        shift:
          | "N"
          | "1"
          | "2"
          | "3"
          | "4"
          | "5"
          | "6"
          | "7"
          | "8"
          | "9"
          | "10"
          | "11"
          | "12"
          | "R"
          | "D"
          | "P";
        resistance: number;
        aptv: number;
        brake: number;
      };
    };
  };
  type Alarm = {
    maxLevel: number;
    uas: {
      ressChargeOver: boolean;
      motorTemp: boolean;
      highVolMuteStatus: boolean;
      motorControlTemp: boolean;
      dcdcStatus: boolean;
      brake: boolean;
      dcdcTemp: boolean;
      insulation: boolean;
      batteryBadConsistency: boolean;
      ressNotMatch: boolean;
      socJump: boolean;
      socOver: boolean;
      batteryLow: boolean;
      batteryOver: boolean;
      socLow: boolean;
      ressVolLow: boolean;
      ressVolOver: boolean;
      batteryTempOver: boolean;
      tempDiff: boolean;
    };
    ressLen: number;
    ressList: [
      {
        type: number;
        code: number;
        level: number;
      }
    ];
    mortorLen: number;
    mortorList: [
      {
        type: number;
        code: number;
        level: number;
      }
    ];
    engineLen: number;
    engineList: [
      {
        type: number;
        code: number;
        level: number;
      }
    ];
    otherLen: number;
    otherList: [
      {
        type: number;
        code: number;
        level: number;
      }
    ];
  };
  type Fault = {
    type: number;
    code: number;
    level: number;
  };
  type CustomExt = {
    dataLen: number;
    pressure1: number;
    pressure2: number;
    batteryVoltage: number;
    dcov: number;
    dcoc: number;
    dcTemp: number;
    acTemp: number;
    lftp: number;
    lftt: number;
    rftp: number;
    rftt: number;
    lr1tp: number;
    lr1tt: number;
    lr2tp: number;
    lr2tt: number;
    rr1tp: number;
    rr1tt: number;
    rr2tp: number;
    rr2tt: number;
    cv: number;
    rc: number;
    cp: number;
    totalCharge: number;
    totalDischarge: number;
    instantPower: number;
    bpiRes: number;
    bniRes: number;
    apTemp: number;
    motorContTemp: number;
    airMode: "OFF" | "WIND" | "HEATING" | "REFRIGERATION" | "ABNORMAL";
    airTemp: number;
    insideTemp: number;
    outsideTemp: number;
    middleDoorStatus: "CLOSE" | "OPEN" | "ABNORMAL";
    frontDoorStatus: "CLOSE" | "OPEN" | "ABNORMAL";
    handbrakeStatus: "OFF" | "ON" | "ABNORMAL";
    keyPosition: "OFF" | "ACC" | "ON" | "START";
  };
  type Extreme = {
    maxVoltageSubSysNo: number;
    maxVoltageSingNo: number;
    maxVoltage: number;
    minVoltageSubSysNo: number;
    minVoltageSingNo: number;
    minVoltage: number;
    maxNtcSubSysNo: number;
    maxNtcNo: number;
    maxNtc: number;
    minNtcSubSysNo: number;
    minNtcNo: number;
    minNtc: number;
  };
  type Location = {
    state: number;
    lng: number;
    lat: number;
  };
  type Motor = {
    no: number;
    status: "CONSUMPTION" | "GENERATION" | "OFF" | "READY" | "ABNORMAL";
    controlTemp: number;
    speed: number;
    torque: number;
    temp: number;
    voltage: number;
    current: number;
  };
  type Vehicle = {
    status: "ON" | "OFF" | "OTHER" | "ABNORMAL";
    chargeStatus: "PARK_CHARGING" | "MOVE_CHARGING" | "UNCHARGED" | "CHARGED" | "ABNORMAL";
    mode: "ELECTRIC" | "MIXED" | "FUEL" | "ABNORMAL";
    speed: number;
    mileage: number;
    voltage: number;
    current: number;
    soc: number;
    dcStatus: "ON" | "OFF" | "ABNORMAL";
    shift:
      | "N"
      | "1"
      | "2"
      | "3"
      | "4"
      | "5"
      | "6"
      | "7"
      | "8"
      | "9"
      | "10"
      | "11"
      | "12"
      | "R"
      | "D"
      | "P";
    resistance: number;
    aptv: number;
    brake: number;
  };
}
