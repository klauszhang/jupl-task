# Jupl Device Manager

this task is for jupl demo only. please take a look at the demo first: http://jupl-demo.azurewebsites.net/

# To install

to pull the package
```
git clone https://github.com/klauszhang/jupl-task.git
```

install npm packages
```
npm install
```
# about the production error

**NOTE from hao - 2/8/2017**
it seems there's some bug in angular-cli:
https://github.com/angular/angular-cli/issues/7113
to fix, i added the package accordingly. now the production mode should run as expected.
please pull the latest version and run the application, please see following scripts to make it running. 

**well, it seems the version i pushed to azure actually works that blinds me. sorry for this inconvenience.**

# To Run

to run it in production (fetch information through ajax calls)
```
ng serve -prod
```
or (in case you don't have angular-cli)
```
npm run ng serve -- -prod
```

to run it in dev (fetch stuff by local data store)
```
ng serve
```
or 
```
npm run ng serve
```

the last step is to redirect your browser to  http://localhost:4200.

# To Test

to run tests
```
npm test
```

# To build
```
ng build -prod
```
or
```
npm run ng build -- -prod
```
Then you can find the distribution in the dist folder.
## NOTES

- It actually took quite a while to finish the page, I want to make it visually nice (to show my respsect). It is even responsive to different platforms.

- Only a few tests were written, but I do picked two `components`, one `service` with dependency and one `interceptor` to test just to show actually I know how to properly test angular apps.

- When `put` to server, I got an `500` error. I just display the error on the page because I believe something start with '5' shouldn't be the client side's fault.

- future work are marked as `TODO` in the app, nothing is near perfect, we always should be ready for refactory.

## Some thoughts
- the http authentication header is added by an interceptor, this is an over-kill for this project. But when handling Oauth calls, this is the standard approach I usually take. Usually I will create another interceptor to catch `401` errors and redirect user to login page.

- I thought of using routing and adding a mocked login page for it. But I removed that idea because I think it would be an over-kill. 

- Maybe I missing some data validation for those inputs, I added name for each input, but all I can check is it should not be empty.

- Use ReactJS would take only half of the time (or even less) for small projects like this :)
