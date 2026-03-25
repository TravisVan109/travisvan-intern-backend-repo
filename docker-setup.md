# Setting Up Docker and Docker Compose

## What is the difference between docker run and docker compose up?
### docker run
Starts one container at a time.
Example: running only PostgreSQL or only Redis.
### docker compose up
Starts multiple containers together, based on the docker-compose.yml file.
Useful for projects like Focus Bear that require API + DB + Redis.

## How does Docker Compose help when working with multiple services?
Docker Compose:
Starts all required services with one command
Ensures they connect to each other automatically
Manages networks, volumes, and environment settings
Makes setup easier for developers

## What commands can you use to check logs from a running container?
docker logs <container>
### follow logs continuously
docker logs -f <container>
### Using Compose
docker compose logs
docker compose logs -f

## What happens when you restart a container? Does data persist?
If the container uses a Docker volume, the data persists.
Example: PostgreSQL data stored in a volume will survive restarts.
If no volume is used, the data is lost when the container stops.