# Logging & Error Handling in NestJS

### 1. What are the benefits of using nestjs-pino for logging?
nestjs-pino provides fast, structured, and JSON-based logging. It integrates easily with NestJS and produces logs that are easy to parse, filter, and analyze in logging tools.

### 2. How does global exception handling improve API consistency?
A global exception handler ensures that all errors follow the same response format. This makes the API predictable, easier to debug, and more user-friendly by avoiding inconsistent or unstructured error messages.

### 3. What is the difference between a logging interceptor and an exception filter?
- A logging interceptor logs details about requests and responses, such as execution time.
- An exception filter focuses on catching and formatting errors when they occur.

### 4. How can logs be structured to provide useful debugging information?
Logs can include timestamps, request IDs, user IDs, endpoint paths, error messages, and stack traces. This structure makes it easier to trace issues and understand what happened during a request.
