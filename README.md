# Eduteam

🛠 made by <a href="https://github.com/Captain-Mo31/">Captain Mo</a> and <a href="https://github.com/HAUDRAUFHAUN/">HAUDRAUFHAUN<a> 

## about: 

This is a project that's allowing teachers to simplify the groupwork of their children on the digital way.
Eduteam enables contactless collaboration from anywhere.
<br>
Anyone can create a group and collaborate with others. 

## developer setup
To get this project up and running on your machine ensure that you have installed:
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
    - [docker-compose](https://docs.docker.com/compose/install/) (comes with docker desktop)
- [Node Js](https://nodejs.org/en/)

First you have to clone the project
```bash
git clone https://github.com/HAUDRAUFHAUN/eduteam/
cd eduteam
```
To run the backend (Dgraph database) run this command:
```bash
docker-compose -f backend.debug.yml up --build -d
```
To run the frontend run following command:
```bash
cd frontend
npm run dev:ssr
```
