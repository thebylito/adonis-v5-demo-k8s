FROM node:14.15 as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY ./package.json /usr/src/app/package.json
COPY ./yarn.lock /usr/src/app/yarn.lock
RUN yarn
COPY . /usr/src/app
RUN yarn build

FROM node:14.15
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/package.json  /usr/src/app
COPY --from=builder /usr/src/app/yarn.lock  /usr/src/app
RUN yarn
COPY --from=builder /usr/src/app/build /usr/src/app

CMD [ "yarn", "start" ]
