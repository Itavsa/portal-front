FROM node:18.15.0-alpine3.17 AS node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/portal /usr/share/nginx/html

CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]