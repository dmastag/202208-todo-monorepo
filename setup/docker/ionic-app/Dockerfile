FROM node:lts AS builder

WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . .
RUN npx nx build ionic-app --configuration=production


# Guide from here
# https://medium.com/@tiangolo/angular-in-docker-with-nginx-supporting-environments-built-with-multi-stage-docker-builds-bb9f1724e984
# https://github.com/tiangolo/node-frontend

FROM nginx:alpine

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
COPY setup/docker/ionic-app/nginx.conf /etc/nginx/conf.d/default.conf

## From 'builder' copy website to default nginx public folder
COPY --from=builder /app/dist/apps/ionic-app/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
