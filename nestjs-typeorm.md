# Connecting NestJS to PostgreSQL with TypeORM

## Why this is important
The backend uses PostgreSQL with TypeORM to manage relational data. Understanding this helps with handling user data, habits, and app settings effectively.

# Reflection (nestjs-typeorm.md)

### 1. How does @nestjs/typeorm simplify database interactions?
It provides an easy way to integrate TypeORM with NestJS. It handles configuration, creates database connections, and allows services to access repositories through dependency injection.

### 2. What is the difference between an entity and a repository in TypeORM?
- An **entity** represents a database table and defines its columns.
- A **repository** provides the methods to read, write, update, and delete records for that entity.

### 3. How does TypeORM handle migrations in a NestJS project?
TypeORM allows you to generate and run migration files that track schema changes. Migrations make sure the database structure stays consistent across environments.

### 4. What are the advantages of using PostgreSQL over other databases in a NestJS app?
PostgreSQL offers strong reliability, supports complex queries, handles relational data well, and provides good performance. It also works smoothly with TypeORM and is widely used in production systems.
