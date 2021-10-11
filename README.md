# Training-3
"type": "module", tests working package.json

# PostgreSQL and Prisma setup

1. Set up the database using the Prisma schema (found in `prisma/schema.prisma`)
   ```sh
   npx prisma db push --preview-feature
   ```
2. Open [Prisma Studio](https://www.prisma.io/studio) to look at or modify the database content:
   ```
   npx prisma studio
   ```

# Docker

Development dev-nodemon hot reloading:
```
docker-compose up
```

Production
```
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```