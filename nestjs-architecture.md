# Understanding Modules, Controllers, and Providers in NestJS

## What is the purpose of a module in NestJS?
A module groups related controllers, providers, and other modules to organize the application logically. It ensures modularity, separation of concerns, and reusability.

## How does a controller differ from a provider?
Controller: Handles HTTP requests and responses.
Provider (service): Contains business logic and is injected into controllers or other providers.

## Why is dependency injection useful in NestJS?
DI allows controllers and services to receive required providers automatically, reducing tight coupling, improving testability, and making code reusable.

## How does NestJS ensure modularity and separation of concerns?
Each module is self-contained, encapsulating its controllers and providers.
Modules can import/export services to share functionality.
This design prevents a monolithic structure and keeps code organized.