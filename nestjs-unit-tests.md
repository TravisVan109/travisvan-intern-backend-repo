# Writing Unit Tests for Services & Controllers in NestJS

### 1. Why is it important to test services separately from controllers?
Services contain the main business logic, while controllers handle requests and responses. Testing them separately ensures the logic works correctly without being affected by routing or HTTP layers.

### 2. How does mocking dependencies improve unit testing?
Mocking replaces real dependencies with controlled versions. This makes tests faster, more reliable, and focused only on the unit being tested without external effects.

### 3. What are common pitfalls when writing unit tests in NestJS?
Common issues include not mocking dependencies properly, forgetting to handle async code, writing tests that depend on real services, and not covering enough scenarios.

### 4. How can you ensure that unit tests cover all edge cases?
You can test different inputs, including valid, invalid, and boundary cases. It is also helpful to think about possible errors and unexpected situations to ensure the code behaves correctly.
