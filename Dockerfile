# Stage 1: Build Angular application
FROM node:14 as build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Serve Angular application with Nginx
FROM nginx:1.21-alpine
COPY --from=build /app/dist/* /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

