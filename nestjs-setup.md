# Setting Up a NestJS Project

## What files are included in a default NestJS project?
A default NestJS project includes the main folder (src) containing app.module.ts, app.controller.ts, app.service.ts, and main.ts. It also includes configuration files such as package.json, tsconfig.json, nest-cli.json, and testing files under the test directory. These files provide the basic structure and allow the application to run immediately.

## How does main.ts bootstrap a NestJS application?
main.ts is the entry point of the application. It uses NestFactory.create(AppModule) to create the NestJS application instance and starts the HTTP server using app.listen(). This is similar to bootstrap methods in Angular, ASP.NET Core, or Spring Boot.

## What is the role of AppModule in the project?
AppModule is the root module that organizes the application. It declares which controllers and providers belong to the application and imports other modules. It acts as the central place where NestJS builds the dependency graph and wiring between different parts of the app.

## How does NestJS structure help with scalability?
NestJS’s modular architecture allows developers to separate features into self-contained modules. This makes large projects easier to maintain, test, and expand. Each module can be developed independently, improving organization and enabling teams to scale the application without creating a messy codebase.