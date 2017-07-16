import { environment } from './../../environments/environment';

import { Device } from 'app/models/Device';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs';
import { InMemoryDataService } from "app/services/in-memory-data.service";

/**
 * remote call for device endpoints
 */
@Injectable()
export class DeviceService {

    private url = (id: number) => `https://preprod.vbn.care/api2/v2/device/${id}?names=RuntimeSettings`;
    private updateUrl = (id: number) => `https://preprod.vbn.care/api2/v2/device/${id}`;
    private mockDataService = new InMemoryDataService();

    constructor(private http: HttpClient) {

    }

    getDevices(id: number): Observable<Device> {

        if (environment.production) {

            return this.http.get<Device>(this.url(id))
                .map(response => response)

        } else {

            return Observable.of(this.mockDataService.get()).delay(1000);

        }
    }


    updateDevice(id: number, data: Device) {

        if (environment.production) {

            return this.http.put<Device>(this.updateUrl(id), data)
                .map(response => response);

        } else {

            return Observable.of(this.mockDataService.put(data)).delay(1000);

        }

    }

}