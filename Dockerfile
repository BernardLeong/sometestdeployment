FROM node:14.18
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
ENTRYPOINT npm run start