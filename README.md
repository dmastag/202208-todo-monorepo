# Project Explanation

The main components for this project is:


[Nx](https://nx.dev) (Monorepo)
[Nxext](https://nxext.dev/) (A Plugin to have Ionic inside NX)
[better-sqlite3](https://github.com/WiseLibs/better-sqlite3) (Using In Memory SQLite seemed sufficient for the Task)
[@nestjsx/crud](https://github.com/nestjsx/crud) (A generator to create the CRUD endpoints)
[@nestjs/swagger ](https://github.com/nestjs/swagger) (To implement OpenAPI for easier debugging)




## Docker Location and usage (Dockerfile and docker-compose)

The dockerfile is stored at setup/docker/nest-server/Dockerfile so that the root of the Project is not to crowded

In order to run from the root of the Project, just run 

`docker build -f setup/docker/nest-server/Dockerfile -t [repository target] .`

In my case, I ran
`docker build -f setup/docker/nest-server/Dockerfile -t dmastag/202208-nest-server .`


docker-compose is in the same directory, here is the command to run it


`docker-compose -f setup/docker/nest-server/docker-compose.yml up`


## Other Notes

To run the Nest Server by itself just run

`npx nx serve nest-server`

The Nest Server has been setup to tun on localhost:3333 and can be changed using the PORT Environment Variable (as can be seen in the docker-compose.yml)


To run the Ionic React App, please use the following command

`npx nx serve ionic-app`
