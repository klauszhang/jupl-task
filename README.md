# Jupl Device Manager

this task is for jupl demo only.

to pull the package
```
git clone https://github.com/klauszhang/jupl-task.git
```

install npm packages
```
npm install
```

to run it in production (fetch information through ajax calls)
```
ng serve --environment=prod
```

to run it in dev (fetch stuff by local data store)
```
ng serve
```

to run test
```
npm test
```

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