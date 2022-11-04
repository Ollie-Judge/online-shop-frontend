# pull the official base image
FROM node:17-alpine
# set working direction
WORKDIR /online-shop-frontend
# add `/app/node_modules/.bin` to $PATH
ENV PATH="./node_modules/.bin:$PATH"
# add app
COPY . .
# install application dependencies
RUN npm ci

RUN npm run build

# start app
CMD ["npm", "start"]
