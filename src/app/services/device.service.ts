/**
 * remote call for device endpoints
 */


import { Device } from './../models/Device';
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs';

@Injectable()
export class DeviceService {
    // mocked
    private url = (id: string) => 'api/device';
    // real
    // private url = (id: string) =>
    //     `https://preprod.vbn.care/api2/v2/device/${id}?names=RuntimeSettings`

    constructor(private http: Http) { }

    // TODO: authentication header

    getDevices(id: string): Observable<Device> {
        return this.http.get(this.url(id))
            .map(response => response.json().data);
        // todo: error handling
    }


    updateDevice(id: string, data: Device) {
        return this.http.put(this.url(id), data)
            .map(response => response.json().data);
    }

}