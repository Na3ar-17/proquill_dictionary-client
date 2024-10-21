FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm i yarn --legacy-peer-deps
RUN yarn
RUN yarn add @tiptap/extension-text-style
COPY . .
RUN yarn build
EXPOSE 3000
CMD [ "yarn","start" ]