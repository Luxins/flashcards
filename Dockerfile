FROM postgres

RUN mkdir -p /docker-entrypoint-initdb.d
WORKDIR /docker-entrypoint-initdb.d

COPY ./prisma/initdb.sql .
