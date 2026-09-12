FROM node:22-alpine
WORKDIR /app
COPY package.json tsconfig.json ./
RUN npm install --ignore-scripts
COPY src ./src
COPY test ./test
RUN npm test
USER node
EXPOSE 8080
CMD ["npm", "start"]
