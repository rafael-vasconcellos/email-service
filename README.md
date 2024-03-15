## Application
make a **POST** request on *api/email* with the following body
```typescript
name?: string
email: string
subject: string
body: string
```

#### Enviroment variables
*HOST, PORT, USER, PASS* (provider's credentials)

## Installation
```bash
$ npm  install
```

## Running the app
```bash
# development
$ npm  run  start

# watch mode
$ npm  run  start:dev

# production mode
$ npm  run  start:prod
```

## Test
```bash
# unit tests
$ npm  run  test

# e2e tests
$ npm  run  test:e2e

# test coverage
$ npm  run  test:cov
```
