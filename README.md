# README

A dockerlized demo app with Rails API (backend) and Next.js (frontend).

## Requirements

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)
- [docker-sync](http://docker-sync.io/)

## Development

### Build

```
docker-compose build
```

### Shutdown

```
docker-compose down
```

### Run

With stack

```
docker-sync-stack start
```

In the backgroud

```
docker-sync start
```

### Commands for frontend

#### yarn add

```
docker-compose run frontend yarn add <NAME>
```

### Commands for backend

#### bundle install

```
docker-compose run -u root backend bundle
```

#### rails c

Login to the running backend process

```
docker exec -it rails-nextjs-demo_backend_1 sh
```

Run rails console

```
bundle exec rails c
```

#### binding.pry

Find `<CONTAINER ID>` of the running backend process

```
docker ps
```

Attach it to your terminal

```
docker attach <CONTAINER ID>
```

The process will pause at the breaking point with `binding.pry`
