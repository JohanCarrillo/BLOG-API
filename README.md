<!-- DTOs are objects that conform to data model types, and DAOs are the services that use them. -->

# BLOG-API

## About the project

asdasd

## Setting up the database

This project uses Prisma ORM to manage the database and PostgreSQL as database engine.

After installing the package with npm you have to initialize Prisma with the command

```bash
npx prisma init
```

### Configure Prisma Client

In order to perform any database operation you to generate the Prisma Client, since the `schema.prisma` file is ready-to-use you just have to run the command

```bash
npx prisma generate
```

And then, import and instantiate the Client in whatever service you need it. Like this

```ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
```

Use the Prisma Client to perform any database operation.
