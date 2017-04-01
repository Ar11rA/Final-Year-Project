dropdb -U aritraaritra testdb
createdb -U aritraaritra testdb
pg_dump -U aritraaritra finalproject -f ./replicaSQL/replica.sql
psql -U aritraaritra -d testdb -f ./replicaSQL/replica.sql

#sh ./replicaSQl/replica.sh && DEV_MODE="test" && ./node_modules/mocha/bin/mocha test/testDb.js