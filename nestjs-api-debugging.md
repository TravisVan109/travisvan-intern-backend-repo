# Inspecting API Requests & Responses

### 1. How can logging request payloads help with debugging?
Logging request payloads helps you see what data is being sent to the API. This makes it easier to identify issues such as missing fields, wrong formats, or unexpected values.

### 2. What tools can you use to inspect API requests and responses?
You can use tools like Postman, Bruno, browser developer tools, and logging within the application. These tools help view headers, body data, and response details.

### 3. How would you debug an issue where an API returns the wrong status code?
You can trace the request flow by adding logs or breakpoints, check validation and error handling logic, and verify conditions in the controller or service that determine the response status.

### 4. What are some security concerns when logging request data?
Logging sensitive data such as passwords, tokens, or personal information can lead to security risks. It is important to mask or avoid logging sensitive fields and limit access to logs.
