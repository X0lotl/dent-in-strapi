FROM node:18

WORKDIR /app
COPY package.json .yarnrc.yml ./
RUN yarn install --network-timeout 100000
COPY . .
RUN yarn build
# RUN mkdir -p public/uploads

CMD ["yarn", "run", "start"]