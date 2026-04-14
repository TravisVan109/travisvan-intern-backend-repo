# Debugging with VS Code & Breakpoints

### 1. How do breakpoints help in debugging compared to console logs?
Breakpoints pause the code at a specific line, allowing you to inspect variables and flow step by step. This is more flexible than console logs, which only print values without stopping execution.

### 2. What is the purpose of launch.json, and how does it configure debugging?
launch.json defines how the debugger runs the application. It sets options such as the program entry file, environment variables, and debug mode settings.

### 3. How can you inspect request parameters and responses while debugging?
You can pause execution with breakpoints and check variables in the debug panel. This includes request data (params, body, query) and the response before it is returned.

### 4. How can you debug background jobs that don’t run in a typical request-response cycle?
You can add breakpoints inside job processors or worker functions and run the worker in debug mode. Logs and step-by-step execution help track how the job is processed.
