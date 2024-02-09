FROM node:18

WORKDIR /app
COPY package.json .yarnrc.yml ./
RUN yarn install 
COPY . .
RUN yarn build
# RUN mkdir -p public/uploads

CMD ["yarn", "run", "start"]