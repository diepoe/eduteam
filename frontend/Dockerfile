FROM node:current-alpine
RUN apk add --no-cache git

RUN mkdir /code
WORKDIR /code


COPY ["package.json", "package-lock.json*", "/code/"]
RUN npm install

COPY . /code/


RUN chmod +x entrypoint.sh

ENTRYPOINT ["/code/entrypoint.sh"]  