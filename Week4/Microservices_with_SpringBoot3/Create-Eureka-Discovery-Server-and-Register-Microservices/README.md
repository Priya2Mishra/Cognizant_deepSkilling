# Eureka Discovery Server and Microservices

This folder contains the complete exercise as four independently runnable Maven projects:

- `eureka-discovery-server` – registry at `http://localhost:8761`
- `account` – Eureka client on port `8081`
- `loan` – Eureka client on port `8082`
- `greet-service` – Eureka client on port `8080`, with `GET /greet`
- `api-gateway` – Eureka client and gateway on port `9090`

Start the services in this order: Eureka server, account, loan, greet-service, then api-gateway.
Open `http://localhost:8761` to view the registered instances and call
`http://localhost:9090/greet-service/greet` to route through the gateway.

See `OUTPUT.txt` for build and expected runtime output.
