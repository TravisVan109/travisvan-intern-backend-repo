# Security Best Practices in NestJS

### 1. What are the most common security vulnerabilities in a NestJS backend?
Common vulnerabilities include insecure authentication, improper authorization, SQL injection, weak input validation, missing HTTPS, exposed error messages, and storing sensitive data insecurely.

### 2. How does @fastify/helmet improve application security?
@fastify/helmet adds important HTTP security headers to help protect against attacks such as cross-site scripting (XSS), clickjacking, and MIME-type sniffing.

### 3. Why is rate limiting important for preventing abuse?
Rate limiting prevents clients from sending too many requests in a short time. This helps protect the API from brute-force attacks, denial-of-service attempts, and automated abuse.

### 4. How can sensitive configuration values be protected in a production environment?
Values such as API keys and passwords should be stored in environment variables or a secret manager (like AWS Secrets Manager). They should never be committed to source code, and access should be restricted with proper permissions.
