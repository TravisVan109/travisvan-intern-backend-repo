# Dependency Injection in NestJS

## 1. How does dependency injection improve maintainability?
Dependency injection helps keep the codebase maintainable by separating object creation from business logic. Instead of classes creating their own dependencies, NestJS provides them automatically. This makes the code easier to test, easier to change, and more modular because each class focuses only on its own responsibilities.

## 2. What is the purpose of the @Injectable() decorator?
The `@Injectable()` decorator tells NestJS that a class is a provider and can be managed by the dependency injection container. This allows the class to be injected into controllers or other providers, enabling clean and structured architecture.

## 3. What are the different types of provider scopes, and when would you use each?
- **Singleton (Default):** One shared instance for the entire application. Used for most services with shared logic.
- **Request Scope:** A new instance for each incoming request. Useful when a service needs to store request-specific data.
- **Transient Scope:** A new instance every time it is injected. Helpful when each use of the service must be completely independent.

## 4. How does NestJS automatically resolve dependencies?
NestJS resolves dependencies through its built-in dependency injection container. When a class requests a dependency in its constructor, NestJS checks the module’s provider list, creates the required instance (if it doesn't already exist), and injects it automatically based on the type defined in the constructor. This process ensures clean separation of concerns and consistent modular structure.