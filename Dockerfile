FROM node:18.15.0-alpine3.17 AS node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/portal /usr/share/nginx/html