# What is NestJS? (Framework Overview) 

## What are the key differences between NestJS and Express.js?

NestJS is a structured, opinionated framework built on top of Express.js. Unlike Express, which is very minimal, NestJS provides modules, controllers, services, dependency injection, and decorators. This makes NestJS easier to scale and maintain in a large backend codebase.

## Why does NestJS use decorators extensively?

Decorators allow NestJS to define routes, modules, and services in a clean and readable way. They add metadata to classes and methods so the framework can automatically handle routing, dependency injection, and configuration without manual setup.

## How does NestJS handle dependency injection?

NestJS has a built-in dependency injection system. When a class is marked with @Injectable(), NestJS can automatically create and provide it to other classes through their constructors. This makes testing and code organization easier.

## What benefits does modular architecture provide in a large-scale app?

Modular architecture breaks the codebase into small, manageable feature modules (e.g., AuthModule, UserModule). This improves maintainability, testability, scalability, and allows developers to work independently without affecting unrelated parts of the application.