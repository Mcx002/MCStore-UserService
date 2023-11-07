# MCStore - User Service

This is a part of the MCStore application, especially manage the whole user service.


## Installation

1. Clone this project at
```
https://github.com/Mcx002/MCStore-UserService.git
```

2. Install the packages
```
pnpm install
```

if there's an error when installing with others package manager, try to use pnpm, because I there's a pnpm-lock so it should not to be "It's work in my computer" haha.

3. Clone the proto at
```
https://github.com/Mcx002/MCStore-Proto
```

4. Open terminal of the current project and generate the proto files
```
make proto
```

5. Set up the env with copy from the test env
```
cp .env.test .env
```

6. Set up the env to your environment configuration

7. Open Postgres RDBMS

8. Create the DB with run the command bellow
```
npm run db-init
```

10. Run the server
```
npm run server
```

# Contributors
- Muchlish Choeruddin [@Mcx002](https://github.com/Mcx002)