# Role-Based Authorization (RBAC) in NestJS

### 1. How does Auth0 store and manage user roles?
Auth0 stores user roles in the user's metadata or inside access tokens as custom claims. These roles are included in the token that the backend receives, allowing the API to check what permissions a user has.

### 2. What is the purpose of a guard in NestJS?
A guard decides whether a request is allowed to proceed to a route handler. It is commonly used for authorization and authentication checks.

### 3. How would you restrict access to an API endpoint based on user roles?
You can create a custom guard that reads the user's roles from the request token and checks if the required role matches. The guard is then applied to the controller or specific route.

### 4. What are the security risks of improper authorization, and how can they be mitigated?
If authorization is not correctly implemented, users could access features or data they should not see. Risks can be reduced by validating tokens, enforcing role checks consistently, avoiding hard-coded permissions, and reviewing access rules regularly.
