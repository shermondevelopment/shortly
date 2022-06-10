CREATE TABLE IF NOT EXISTS users (
  id serial not null primary key,
  name varchar not null,
  email varchar not null unique,
  password varchar not null,
)

CREATE TABLE IF NOT EXISTS shorten (
  id serial not null primary key,
  url varchar not null,
  shorturl varchar not null unique,
  visit integer not null default 0,
  user_id serial not null,

  FOREIGN KEY (user_id) REFERENCES users(id)
)