# API Testing in NestJS

### 1. How does Supertest help test API endpoints?
Supertest allows you to send HTTP requests directly to your NestJS application during tests. It helps verify real API behavior without starting an external server.

### 2. What is the difference between unit tests and API tests?
Unit tests check small pieces of logic in isolation.  
API tests check full request–response behavior, including routing, validation, and middleware.

### 3. Why should authentication be mocked in integration tests?
Mocking authentication avoids relying on real tokens or external services. This makes tests faster, stable, and easier to control when testing protected endpoints.

### 4. How can you structure API tests to cover both success and failure cases?
You can write separate test blocks for valid inputs (expected success) and invalid inputs or missing permissions (expected errors). This ensures the API behaves correctly in all scenarios.
