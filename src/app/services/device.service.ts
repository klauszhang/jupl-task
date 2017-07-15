import { Device } from './../models/Device';
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs';

@Injectable()
export class DeviceService {
    private url = 'api/device';


    constructor(private http: Http) { }

    getDevices(): Observable<Device> {
        return this.http.get(this.url)
            .map(response => response.json().data);
        // todo: error handling
    }

}