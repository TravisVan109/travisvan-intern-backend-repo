# Authentication with Auth0 in NestJS

### 1. How does Auth0 handle authentication compared to traditional username/password auth?
Auth0 manages authentication externally. Instead of handling login logic in your app, it provides secure login, token generation, and identity management. This reduces the need to store passwords and improves security.

### 2. What is the role of JWT in API authentication?
JWT (JSON Web Token) is used to securely transmit user information between the client and server. It contains user identity and permissions, and the server verifies it before allowing access to protected routes.

### 3. How do jwks-rsa and public/private key verification work in Auth0?
Auth0 signs JWTs using a private key. The backend uses jwks-rsa to fetch the public key from Auth0 and verify the token. This ensures the token is valid and has not been tampered with.

### 4. How would you protect an API route so that only authenticated users can access it?
You can use an authentication guard that checks for a valid JWT in the request. If the token is valid, the request is allowed; otherwise, access is denied.
