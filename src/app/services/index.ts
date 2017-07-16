import { environment } from './../../environments/environment';
import { AuthInterceptorService } from './auth.interceptor.service';
import { DeviceService } from './device.service';
import { NgModule } from '@angular/core';

import { InMemoryDataService } from './in-memory-data.service';

@NgModule()
export class ServicesModule { }

export {
    DeviceService,
    AuthInterceptorService
}