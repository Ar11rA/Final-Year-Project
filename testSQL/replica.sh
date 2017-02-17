dropdb -U aritraaritra testdb
createdb -U aritraaritra testdb
pg_dump -U aritraaritra finalproject -f ./test/SQLreplica.sql
psql -U aritraaritra -d testdb -f ./testSQL/replica.sql