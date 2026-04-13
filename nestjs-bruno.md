# Using Bruno for API Testing

### 1. How does Bruno help with API testing compared to Postman or cURL?
Bruno provides a lightweight and fast interface for sending requests, with a folder-based structure stored as simple text files. It is simpler than Postman and more organized than using raw cURL commands.

### 2. How do you send an authenticated request in Bruno?
You include the token in the request headers, usually under `Authorization: Bearer <token>`. Bruno allows saving environment variables so tokens can be reused easily.

### 3. What are the advantages of organizing API requests in collections?
Collections keep related requests together, make testing easier, and help maintain consistency. They also make it simpler for teams to share and update testing workflows.

### 4. How would you structure a Bruno collection for a NestJS backend project?
You can create folders such as:
- `auth` (login, signup, refresh token)
- `users` (get user, update user)
- `tasks` or feature-specific modules
- `admin` (restricted endpoints)
This matches the NestJS module structure and keeps everything organized.
