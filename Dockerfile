FROM node:18.13.0-bullseye-slim
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production --omit=dev
COPY . .
CMD ["npm", "start"]
