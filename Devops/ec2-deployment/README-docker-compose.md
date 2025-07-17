# Deploy with Docker Compose

This guide explains how to deploy the Life Insurance Recommendation App using Docker Compose and the provided helper script.

---

## Prerequisites
- Linux system (script is written for Ubuntu/Debian; adapt as needed for other OS)
- Sudo privileges (for installing dependencies)
- Internet connection (for installing Docker and docker-compose if missing)

---

## Files
- `deploy-with-docker-compose.sh`: Bash script to check/install Docker and docker-compose, then run the app with Docker Compose.
- `docker-compose.yml`: Compose file at the project root (required).

---

## Usage
1. Make the script executable:
   ```sh
   chmod +x Devops/ec2-deployment/deploy-with-docker-compose.sh
   ```
2. Run the script from the project root:
   ```sh
   ./Devops/ec2-deployment/deploy-with-docker-compose.sh
   ```
3. The script will:
   - Check for Docker and docker-compose, installing them if missing
   - Start the app using `docker-compose up -d`
   - Print status and next steps

---

## Notes
- The script assumes you are running on Ubuntu/Debian. For other OS, modify the install commands as needed.
- Make sure `docker-compose.yml` is present in the project root.
- To stop the app, run:
  ```sh
  docker-compose down
  ``` 