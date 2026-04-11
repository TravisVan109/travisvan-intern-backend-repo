# Mocking API Calls in Jest

### 1. Why is it important to mock API calls in tests?
Mocking API calls prevents tests from relying on real external services. This makes tests faster, more reliable, and not affected by network issues or API rate limits. It also allows you to control the responses and test different scenarios.

### 2. What are some common pitfalls when testing asynchronous code?
Common pitfalls include forgetting to return or await promises, tests finishing before async operations complete, not handling rejected promises, and having mocks that do not match the expected behavior of real APIs.

### 3. Why is automated testing important in software development?
Automated testing helps ensure code works correctly and prevents bugs when making changes. It improves code quality, saves time, and makes development more reliable by catching issues early.

### 4. What did you find challenging when writing your first Jest test?
Common challenges include understanding how to structure tests, setting up mocks, handling asynchronous code, and knowing what to test. It can also take time to get familiar with Jest syntax and concepts.
