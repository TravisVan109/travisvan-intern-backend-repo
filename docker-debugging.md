#  Debugging & Managing Docker Containers

## How can you check logs from a running container?

Using docker logs <container_name>, for example:

docker logs focusbear-postgres

## What is the difference between docker exec and docker attach?
docker exec opens a new shell without interfering with the container’s main process.
docker attach connects to the main process and can accidentally stop it if you exit incorrectly.

## How do you restart a container without losing data?
docker restart <container_name>
Data is safe because it is stored in a Docker volume.

## How can you troubleshoot DB connection issues in a NestJS app?
Check logs: docker logs api
Check DB logs: docker logs focusbear-postgres
Enter DB container: docker exec -it focusbear-postgres bash
Try connecting with psql inside the container.