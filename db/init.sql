SELECT 'CREATE DATABASE typeORMDB'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'typeORMDB')\gexec