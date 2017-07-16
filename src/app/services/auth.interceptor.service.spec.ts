import { HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthInterceptorService } from 'app/services';
import { environment } from "environments/environment";
describe('AuthInterceptorService', () => {
    let interceptor: AuthInterceptorService, next: HttpHandler, req: HttpRequest<any>;

    beforeEach(() => {
        next = <HttpHandler>jasmine.createSpyObj('HttpHandler', ['handle']);
        req = new HttpRequest<any>('GET', 'anything');

        interceptor = new AuthInterceptorService();
        spyOn(req, 'clone');
    })
    it('should add authentication header to the request', () => {
        interceptor.intercept(req, next);
        const token = environment.token;
        const expected = req.clone({ headers: req.headers.append('Authorization', `Bearer ${token}`) });
        expect(next.handle).toHaveBeenCalledWith(expected);
    })
})