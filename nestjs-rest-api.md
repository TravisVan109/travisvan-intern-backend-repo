# Creating REST APIs with NestJS  
## Reflection (nestjs-rest-api.md)

### 1. What is the role of a controller in NestJS?
In NestJS, a controller is responsible for **handling incoming HTTP requests** and **returning responses** to the client.  
Controllers define routes (endpoints) and link them to specific handler functions.  
They act as the entry point that receives data from the client, validates or forwards it, and delegates tasks to services.

---

### 2. How should business logic be separated from the controller?
Business logic should be moved out of controllers and placed into **services**.  
A controller should only:
- Receive requests  
- Extract required data (e.g., params, body)  
- Call the appropriate service method  
- Return the service’s result  

By separating logic into services, the controller becomes clean, simple, and easy to understand.

---

### 3. Why is it important to use services instead of handling logic inside controllers?
Using services is important because it provides:
- **Separation of concerns**: Controllers handle routing, services handle logic.  
- **Reusability**: Service functions can be reused in multiple controllers.  
- **Testability**: Services are easier to test independently.  
- **Maintainability**: Code becomes cleaner and easier to manage.  
- **Scalability**: Logic organized into services scales better in large applications.

---

### 4. How does NestJS automatically map request methods (GET, POST, etc.) to handlers?
NestJS uses **decorators** to map HTTP methods to controller handler functions.  
Examples include:
- `@Get()` → maps GET requests  
- `@Post()` → maps POST requests  
- `@Put()` → maps PUT requests  
- `@Delete()` → maps DELETE requests  

When NestJS starts, it reads these decorators, registers the methods with the router, and automatically connects each route to the correct controller method.
