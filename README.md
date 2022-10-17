# Culqi Test - Serverless Backend 🚀 

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

### Requerimientos:

- [Docker](https://docs.docker.com/engine/install/ubuntu/)
- [docker-compose](https://docs.docker.com/compose/install/)
- [Make](https://formulae.brew.sh/formula/make)
- [Serverless](https://www.npmjs.com/package/serverless)
- Node>=v16

### Pasos:
1. Instalar dependencias.
```sh
$ yarn install
```
2. Build de la aplicación.
```sh
$ yarn build
```
3. Crear file .env
```sh
REDIS_URL='redis://localhost:6379'
```
4. Levantar BD local
```sh
$ make build
$ make up
```
5. Levantar servidor local.
```sh
$ sls offline
```
6. Para ejecutar los test.
```sh
$ yarn test
```
7. Para analizar que el código esté correcto.
```sh
$ yarn lint
```

### Ejemplo de Request:
Previamente configurar header Authorization de tipo Bearer Token:
```sh
6059f42b-956a-4357-820d-a458d4f36f4f
```

Crear token: *http://localhost:3000/dev/creates*
```sh
{
    "email": "culqi.admin@gmail.com",
    "cardNumber": "4970100000000014",
    "cvv": "1234",
    "expirationYear": "2023",
    "expirationMonth": "12"
}
```

Pegar el token para obtener los datos de la tarjeta.
Obtener token: *http://localhost:3000/dev/gets/{token}*
