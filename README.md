<h1 align="center">Robot City</h1>

<p align="center">A full-stack game from <a href="https://www.theodinproject.com/lessons/nodejs-where-s-waldo-a-photo-tagging-app">Odin</a></p>

## Demo: [Live](teenage-alanah-fede-org-6a2490a6.koyeb.app)

## Frontend built with

- Vite + React
- React router v6
- CSS

### Dependencies

- **react**: library for building user interfaces
- **react-dom**: provides DOM-specific methods for rendering and managing React components within a web browser's Document Object Model

<br/><br/>

## Backend built with

- Node JS
- Express

### Dependencies

- **@prisma/client**: auto-generated, type-safe query builder that provides an intuitive API for interacting with your database
- **cors**: allows a browser to request resources from a domain different from the one the browser originally loaded the page from
- **dotenv**: tool that loads environment variables, often containing sensitive information from a .env file
- **express**: unopinionated web framework for Node.js. It simplifies the process of building server-side applications and APIs

<br/><br/>

## Clone and start the project

Here is how you can start the project locally.

Prerequisites:

- Installed psql
- Installed npm
  <br/><br/>

**1. Clone the repo**

```
#SSH
$ git clone git@github.com:fedewulff/robot_city.git
```

**2. Download dependencies**

```
$ cd robot_city/frontend
$ npm i

$ cd robot_city/backend
$ npm i
```

**3. Create `.env` inside frondend and backend folder**

**4. Add the following to `.env` inside frontend folder**

```
VITE_BACKEND_URL="http://localhost:[PORT NUMBER FROM .env IN BACKEND]"
```

**5. Create postgresql database**

- `$ psql`
- 'CREATE DATABASE robot_city;`

**6. Add the following to `.env` inside backend folder**

```
PORT=[XXXX]
DATABASE_URL="postgresql://<user>:<password>@localhost:5432/robot_city"
```

**8. Start the project**

cd robot_city/frontend `$ npm run dev`

cd robot_city/backend `$ node --watch src/app.js `
