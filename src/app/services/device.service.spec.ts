import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { InMemoryDataService } from 'app/services/in-memory-data.service';
import { DeviceService } from './device.service';


describe('DeviceService', () => {
    let deviceService: DeviceService, mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['get', 'put']);
        deviceService = new DeviceService(mockHttp);
        deviceService.env = environment;
    })


    describe('getDevices', () => {
        it('should get device from remote service', () => {

            const data = new InMemoryDataService();
            mockHttp.get.and.returnValue(Observable.of(data.get()));

            deviceService.getDevices(123)
                .subscribe(
                response => expect(response).toBe(data.get())
                );

        })
    })




});