# What is Docker and Why Use It?
## How does Docker differ from a virtual machine?
Docker uses containers, while virtual machines (VMs) use virtualized operating systems.

### Docker
Shares the host machine’s OS kernel
Lightweight, fast startup
Uses significantly less memory and disk space
Containers run isolated applications, not entire OSes
### Virtual Machines
Each VM includes a full OS (Windows/Linux)
Heavy, slower to start
Requires more CPU and RAM
Useful for fully isolated system-level testing

## Why is containerization useful for a backend like Focus Bear’s?
Focus Bear’s backend is built with multiple services that need to run reliably together (API, databases, background workers). Containerization helps because:

Each service runs in its own isolated environment
Updates or changes in one service do not break others
Developers and production servers run the same container image, reducing bugs
Makes onboarding new developers easier (just run docker compose)

## How do containers help with dependency management?
Containers package everything a service needs:

Programming runtime (.NET, Node, Python, etc.)
Libraries and dependencies
Environment variables
Configurations

Instead of installing dependencies manually, the container image includes them all.

## What are the potential downsides of using Docker?
Learning curve for new developers
Containers still share the host kernel → not as isolated as VMs
Can be resource-heavy if running many containers
Debugging inside containers can be slightly harder
Not all applications behave well in containerized environments
Storage management becomes important because images can grow large