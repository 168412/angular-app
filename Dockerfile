# stage 1
FROM node:alpine as node
WORKDIR /app
RUN apk add --no-cache git && \
    git clone https://github.com/168412/angular-app.git . && \
    npm install && \
    npm install -g @angular/cli@latest && \
    ng build --base-href / --output-path=dist/ang-ui && \
    apk del git && \
    rm -rf /app/node_modules /root/.npm /var/cache/apk/*  # Clean up unnecessary files

# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/ang-ui /usr/share/nginx/html
