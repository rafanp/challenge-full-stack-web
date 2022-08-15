# challenge-full-stack-web

## Project setup


### Start backend

- Acesse a pasta do backend
$ cd BACK

- Start all the services and the application with Docker Compose
$ docker-compose up -d

- Check .env file, if it didn't exist, clone the .env.example as .env
$ cp .env.example .env

- Once the services are running, run the migrations
$ yarn migration:run

- To finish, run the api service
$ yarn dev


### Start Frontend
On the main folder, run the codes above

- If you are in the /BACK folder, run the code:
$ cd ..

- Install dependencies and create node_modules 
$ yarn

- Check .env file, if it didn't exist, clone the .env.example as .env
$ cp .env.example .env

- Compiles and hot-reloads for development 
$ yarn serve

