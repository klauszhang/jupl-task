import { AuthInterceptorService } from './auth.interceptor.service';
import { DeviceService } from './device.service';
import { NgModule } from '@angular/core';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
    imports: [
        // for develop
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ]
})
export class ServicesModule { }

export {
    DeviceService,
    AuthInterceptorService
}