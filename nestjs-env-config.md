# Handling Environment Variables & Configuration in NestJS

### 1. How does @nestjs/config help manage environment variables?
It loads environment variables from `.env` files and makes them available across the application. It also supports configuration files, default values, and structured configuration management.

### 2. Why should secrets (e.g., API keys, database passwords) never be stored in source code?
Secrets in source code can be exposed through version control, shared repositories, or accidental leaks. Keeping them in environment variables protects them from unauthorized access.

### 3. How can you validate environment variables before the app starts?
You can use validation libraries like `joi` together with `@nestjs/config` to check required variables, types, and formats. If validation fails, the app can stop before starting with invalid or missing settings.

### 4. How can you separate configuration for different environments (e.g., local vs. production)?
You can use multiple `.env` files (e.g., `.env.local`, `.env.production`) or load different configuration files based on environment variables. This allows each environment to have its own settings without mixing them together.
