# Background Jobs with BullMQ & Redis in NestJS

### 1. Why is BullMQ used instead of handling tasks directly in API requests?
BullMQ allows long-running tasks to run in the background. This prevents API endpoints from becoming slow or timing out. It improves performance and provides a smoother experience for users.

### 2. How does Redis help manage job queues in BullMQ?
Redis stores job queues, job states, retry information, and scheduling details. It acts as the central system that keeps track of pending, active, completed, and failed jobs.

### 3. What happens if a job fails? How can failed jobs be retried?
BullMQ keeps failed jobs in a separate state. Jobs can be retried automatically based on retry rules, such as retry count or delay between retries. Developers can also manually inspect or reprocess them.

### 4. How does Focus Bear use BullMQ for background tasks?
It is used to handle tasks like sending reminders, processing analytics data, and syncing user activity in the background. This helps reduce load on the main API and ensures tasks run reliably even if they take time.
