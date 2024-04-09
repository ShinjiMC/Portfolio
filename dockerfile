# First Stage: Serve app with Nginx
FROM node:20.10.0 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Second Stage: Serve app with Nginx
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html/Portfolio

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]