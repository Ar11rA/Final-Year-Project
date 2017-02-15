dropdb -U aritraaritra testdb
createdb -U aritraaritra testdb
pg_dump -U aritraaritra finalproject -f ./replica.sql
psql -U aritraaritra -d testdb -f ./replica.sql
