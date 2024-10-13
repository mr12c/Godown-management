# Node.js Backend Application with Docker

## Prerequisites:
- Ensure Docker is installed on your local machine. You can download it from [Docker's official website](https://www.docker.com/products/docker-desktop).

## Steps to Set Up the Node.js Backend Application Locally Using Docker:

### 1. Clone the repository:
```bash
git clone https://github.com/mr12c/Godown-management.git
cd your-repository
```


### 2. Create a `.env` file:
Create a `.env` file based on the provided `.envsample`. You can do this by copying the `.envsample` file:

```bash
cp .envsample .env
```

### 3. build docker img
```bash
docker build -t your-node-app .
```

### 4.run it
```bash
docker run --env-file .env -p 5000:3000 your-node-app

```
