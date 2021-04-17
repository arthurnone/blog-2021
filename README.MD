## My Blog

**https://arthurnone.com/**

`react` `django` `docker` `typescript` `styled-components`  

## dependent 

- docker
- docker compose

### build docker

```
bash build_docker.sh
```

## dev mode

#### back-end dev

```
bash start_docker.sh server
cd /www/server/
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```

#### front-end dev

```
bash start_docker.sh web
cd /www/app/
yarn start
# yarn install
# yarn build
```

## deploy

```
bash start_docker.sh
```