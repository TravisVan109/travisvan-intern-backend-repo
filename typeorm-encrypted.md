# Using typeorm-encrypted for Data Encryption

### 1. Why does Focus Bear double encrypt sensitive data instead of relying on database encryption alone?
Double encryption adds an extra layer of protection. Even if the database is compromised, the data remains encrypted at the application level, making it harder for attackers to access sensitive information.

### 2. How does typeorm-encrypted integrate with TypeORM entities?
typeorm-encrypted is used by adding encryption settings directly to entity fields. When data is saved, it is automatically encrypted, and when retrieved, it is decrypted without changing how the code interacts with the entity.

### 3. What are the best practices for securely managing encryption keys?
Encryption keys should be stored in environment variables or a secure key management service. Access to keys should be restricted, rotated regularly, and never stored in source code.

### 4. What are the trade-offs between encrypting at the database level vs. the application level?
- Database-level encryption is easier to manage and protects data at rest.
- Application-level encryption provides more control and protects data before it reaches the database.
- However, application-level encryption adds complexity and may affect performance.
