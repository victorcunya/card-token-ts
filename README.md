# Culqi Test - Serverless Backend 🚀 

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

### Requerimientos:

- [Docker](https://docs.docker.com/engine/install/ubuntu/)
- [docker-compose](https://docs.docker.com/compose/install/)
- [Make](https://formulae.brew.sh/formula/make)
- [Serverless](https://www.npmjs.com/package/serverless)

### Pasos:
1. Instalar dependencias.
```sh
$ yarn install
```
2. Build de la aplicación.
```sh
$ yarn build
```
3. Levantar BD local
```sh
$ make build
$ make up
```
4. Levantar servidor local.
```sh
$ sls offline
```
