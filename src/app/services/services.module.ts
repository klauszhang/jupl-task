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
export class ServicesModule {

    // provide config methods. not used for now
    static forRoot() {
        return {
            ngModule: ServicesModule,
            providers: [DeviceService]
        }
    }
}

export {
    DeviceService
}