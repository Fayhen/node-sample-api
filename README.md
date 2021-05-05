# node-sample-api
A simple Node API with Knex and Express

This is a simple application made with Node.js, created as a learning experience. The application consists of a simple User CRUD API, using express to listen for different endpoints and Knex for database migrations. A MySQL database is set up through a docker-compose script, with a `users` and `roles` tables subsequently created a populated with dummy data.

The API handles User creation, updating and deletion by means of simple HTTP requests on dedicated routes.

## Setup

The first is to clone this repository and create a container for a MySQL database. Please ensure you have Docker and docker-compose installed on your machine.

To set up the container, enter the following on your command line:

```bash
docker-compose up -d
```

That's it. The script will create a container with a MySQL database named `sampledb` with the default configuration found within the `docker-compose.yml` file. Use `docker ps` to list your currently running containers, and `docker-compose down` to stop them. Assuming the configs in the docker-compose file were not changed, you can access the database and directly executing SQL statements in your terminal by typing:

```bash
mysql -h localhost -P 3306 -u root -p sampledb --protocol=tcp
```

A default password is provided with the configs as well.

To set up the Node API, first install the dependencies:

```bash
yarn install
```

Use the following commands do create and populate tables through Knex:

```bash
yarn tables
yarn dummydata
```

To serve the API, enter:

```bash
yarn serve
```

## Usage

Being a simple API, this application only a few routes:

#### (GET, POST) /users

GET requests will fetch all users from the database:

```json
[
  {
    "id": 1,
    "username": "admin",
    "firstname": "foo",
    "lastname": "bar",
    "email": "admin@company.com",
    "role_id": 1
  }
]
```

POST requests will create new users, requiring the necessary to be sent as JSON:

```json
{
	"username": "johnnie",
	"firstname": "John",
	"lastname": "Doe",
	"email": "john@company.com",
	"role_id": 3
}
```

Valid role IDs are `1`, `2` and `3`, with a basic validation in place.

#### (PUT, DELETE) /users/:id

PUT requests will update data for a user with a given ID. As such, JSON data must be present:

```json
{
	"username": "jane",
	"firstname": "Jannet",
	"lastname": "Doe",
	"email": "jane@company.com",
	"role_id": 3
}
```

DELETE requests simply delete users based on their ID.

#### (GET) /

The base route will greet you:

```json
{
  "message": "Hello from Node!"
}
```
