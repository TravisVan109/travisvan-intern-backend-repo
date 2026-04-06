# Validating Requests with Pipes in NestJS

## Goal
Understand how pipes work in NestJS and how to use them for data validation and transformation.

## Why this is important
Request validation is essential for data consistency and security. Pipes in NestJS help validate and transform incoming data before the API processes it.


# Reflection (nestjs-validation.md)

### 1. What is the purpose of pipes in NestJS?
Pipes are used to validate and transform incoming request data. They run before the controller handler and ensure the data is in the correct format or meets certain rules.

### 2. How does ValidationPipe improve API security and data integrity?
ValidationPipe checks incoming data against rules defined in DTOs. It helps reject invalid or unsafe data, ensures correct data types, and prevents extra or unexpected fields from being processed.

### 3. What is the difference between built-in and custom pipes?
- Built-in pipes are provided by NestJS for common tasks such as validation or type conversion (e.g., ValidationPipe, ParseIntPipe).
- Custom pipes are created when you need your own logic for validation or transformation that built-in pipes cannot handle.

### 4. How do decorators like @IsString() and @IsNumber() work with DTOs?
These decorators are part of the class-validator library. When applied to DTO fields, they define validation rules. When ValidationPipe is enabled, NestJS checks the incoming data against these decorators and rejects the request if the data does not match the rules.
