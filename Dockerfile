FROM postgres:12.2
ENV POSTGRES_PASSWORD postgres 
ENV POSTGRES_DB postgres 
COPY mock-data.sql /docker-entrypoint-initdb.d/