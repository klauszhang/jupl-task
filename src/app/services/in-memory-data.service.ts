import { Device } from 'app/models/Device';
/**
 * provide service for mocking api calls
 */


export class InMemoryDataService {

    constructor() {
        this.createDb()
    }

    // data is a singleton
    public data: Device;

    get = () => this.data;
    put = (device: Device): Device => this.data = device;

    createDb() {
        this.data = {
            "VigilId": 40072,
            "Uid": "R3AJ1001EMH",
            "Model": {
                "RuntimeSettings": {
                    "ReportInterval": 999,
                    "PingInterval": 1000,
                    "PreAlarmPeriod": 10,
                    "AdherenceCheckInterval": 400,
                    "AlarmClearTimeout": 900,
                    "AlarmCancelTimeout": 15,
                    "DailyReportInterval": 42000,
                    "GeoLocationRetryCount": 5,
                    "GeoLocationHighAccuracy": false,
                    "GeoLocationTimeOut": 500,
                    "GeoMaxAgeTimeOut": 60,
                    "CmfPhoneNumber": "+64123456789",
                    "PalmTouchTrigger": false,
                    "TouchTriggerCooldownPeriod": 30,
                    "DemoMode": false,
                    "DeviceName": "Yishi Guo",
                    "VerboseLogging": true
                }
            }
        };
    }
}