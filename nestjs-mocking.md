# Mocking Dependencies & Database Interactions in NestJS

### 1. Why is mocking important in unit tests?
Mocking allows tests to run without relying on real services, APIs, or databases. It makes tests faster, more predictable, and focused only on the specific function or component being tested.

### 2. How do you mock a NestJS provider (e.g., a service in a controller test)?
You can provide a mock version of the service in the testing module using `useValue` or `useFactory`. This lets the controller use the mocked methods during tests instead of the real implementation.

### 3. What are the benefits of mocking the database instead of using a real one?
Mocking avoids slow database operations, keeps tests isolated, and ensures results do not depend on actual data. It also makes it easier to simulate specific scenarios, such as errors or empty results.

### 4. How do you decide what to mock vs. what to test directly?
You mock anything not part of the logic being tested, especially external services or complex dependencies. You test directly the code you own, such as business logic in services or validation rules.
