# Eduteam

🛠 made by <a href="https://github.com/Captain-Mo31/">Captain Mo</a> and <a href="https://github.com/HAUDRAUFHAUN/">HAUDRAUFHAUN<a> 

## about: 

This is a project that's allowing teachers to simplify the groupwork of their children on the digital way.
Eduteam enables contactless collaboration from anywhere.
<br>
Anyone can create a group and collaborate with others. 

## developer setup
To get this project up and running on your machine ensure that you hav installed:
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
    - [docker-compose](https://docs.docker.com/compose/install/)
- [Node Js](https://nodejs.org/en/)

First you have to clone the project
```bash
git clone https://github.com/HAUDRAUFHAUN/eduteam/
cd eduteam
```
If you want to run the entire project including database, GraphQL-Api and Svelte frontend run:
```bash
docker-compose -f docker-compose.debug.yml up --build
```
If you only want to run the frontend run following command:
```bash
cd frontend
npm run dev
```