FROM node:current-alpine
RUN apk add --no-cache git

RUN mkdir /code
WORKDIR /code

COPY . /code/
RUN npm install


RUN chmod +x entrypoint.sh

ENTRYPOINT ["/code/entrypoint.sh"]  