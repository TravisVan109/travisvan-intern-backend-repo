# Using Docker for NestJS Development
## How does a Dockerfile define a containerized NestJS application?
A Dockerfile describes the steps needed to run the NestJS app inside a container.
It sets the base image (Node), copies dependencies, installs modules, builds the project, and runs the compiled JavaScript.
This allows the app to run consistently everywhere because the environment is always the same.

## What is the purpose of a multi-stage build in Docker?
A multi-stage build helps keep the final Docker image small and efficient.
The first stage installs all dependencies and builds the NestJS project.
The second stage only includes the compiled dist files and production dependencies.
This reduces image size and improves performance.

## How does Docker Compose simplify running multiple services together?
Docker Compose allows defining several services (e.g., NestJS + PostgreSQL) in one YAML file.
Running docker compose up starts all services automatically, sets up networking, and ensures dependencies start in the correct order.
This makes local development much easier.

## How can you expose API logs and debug a running container?
You can view logs with docker logs <container-name>, or enter the container using docker exec -it <container-name> sh.
This allows checking running processes, verifying environment variables, inspecting folders, and identifying runtime errors.