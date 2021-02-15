# Cookie Bakery

This bakery does some cool animations and order cookies :)

## Stack & Components

Vue.js, Vite, Node.js, MongoDB

## Setup and Running

In order to install node dependencies, run from command line:

```bash
npm install
```

### MongoDB

Installing it on Linux:

```bash
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64,s390x ] http://repo.mongodb.com/apt/ubuntu focal/mongodb-enterprise/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-enterprise.list
sudo apt-get update
sudo apt-get install -y mongodb-enterprise
```

You can start the mongod process by issuing the following command:

```
sudo systemctl start
```

As needed, you can stop the mongod process by issuing the following command:

```
sudo systemctl stop mongod
```

For more details on setup mongodb locally, refer to [docs](https://docs.mongodb.com/manual/installation/).

## Running the frontend application

Run `npm run dev` for a dev server. Navigate to `http://localhost:3000/`

## Running the backend application

Run `node server.js` it runs by default on `http://localhost:3001/`
