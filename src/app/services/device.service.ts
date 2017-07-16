import { environment } from '../../environments/environment';
import { Device } from 'app/models/Device';
/**
 * remote call for device endpoints
 */

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs';

@Injectable()
export class DeviceService {
    // mocked
    // private url = (id: string) => 'api/device';

    // real
    private url = (id: string) =>
        `https://preprod.vbn.care/api2/v2/device/${id}?names=RuntimeSettings`

    constructor(private http: HttpClient) { }

    // TODO: authentication header

    getDevices(id: string): Observable<Device> {
        return this.http.get<Device>(this.url(id))
            .map(response => response);
        // todo: error handling
    }


    updateDevice(id: string, data: Device) {
        return this.http.put<Device>(this.url(id), data)
            .map(response => response);
    }

}