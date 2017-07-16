import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {

    getToken(): Observable<string> {
        return Observable.from('RJ56/Rw5vEO2WfAdPih5Lw==');
    }

}