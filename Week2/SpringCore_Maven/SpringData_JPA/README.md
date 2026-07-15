# Spring Data JPA: Quick Example

This project retrieves countries through a JPA entity, repository, and service.

## MySQL setup

Create the schema and sample data before running with the default profile:

```sql
create schema ormlearn;
use ormlearn;
create table country (code varchar(2) primary key, name varchar(50));
insert into country values ('IN', 'India');
insert into country values ('US', 'United States of America');
```

Configure the username and password in `src/main/resources/application.properties`, then run:

```bash
./mvnw spring-boot:run
```

## Demo mode

The `demo` profile uses an in-memory H2 database and the same sample countries, so the program can be verified without MySQL:

```bash
./mvnw spring-boot:run -Dspring-boot.run.profiles=demo
```
