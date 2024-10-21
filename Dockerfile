FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm i yarn --legacy-peer-deps
RUN yarn
COPY . .
RUN yarn build
EXPOSE 3000
CMD [ "yarn","start" ]