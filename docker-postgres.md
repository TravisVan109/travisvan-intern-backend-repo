# Running PostgreSQL in Docker 

## What are the benefits of running PostgreSQL in a Docker container?
Running PostgreSQL in Docker makes setup much easier because I don’t need to install PostgreSQL directly on my computer. Docker gives me:
A clean and isolated environment
A database that matches the backend’s production setup
Easy start/stop with one command
No risk of breaking my system by installing the wrong version

## How do Docker volumes help persist PostgreSQL data?
Docker volumes store PostgreSQL data outside the container.
This means the data is saved even if I:

Restart the container
Stop the container
Recreate the PostgreSQL image

Without a volume, the database would reset every time.
With a volume, my tables and records stay safe.

## How can you connect to a running PostgreSQL container?
I can connect in two main ways:

### Using a GUI tool (easiest):
Open pgAdmin or DBeaver
Connect using:
Host: localhost
Port: 5432
User: the username in docker-compose
Password: the password in docker-compose
Database: the database name
### Using terminal
docker exec -it <container-name> psql -U <user> -d <database>