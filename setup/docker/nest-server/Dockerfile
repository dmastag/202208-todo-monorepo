FROM node:lts AS builder

WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . .
RUN npx nx build nest-server --configuration=production

FROM node:lts

WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install --production
COPY --from=builder /app/dist/apps/nest-server ./dist/
CMD ["node", "dist/main"]
