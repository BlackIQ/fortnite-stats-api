# Fortnite Stats API

This API handles [bot](https://github.com/BlackIQ/fortnite-stats-bot) backend.

## How to contribute

To use this API in your machine, you need to follow some steps:

1. Clone repository
2. Install packages
3. Add your variables in `.env`
4. Run

### Clone repository

So, first thing first, create your app direactory or anywhere:

```bash
$ mkdir -p /apps/fortnite
```

> The `-p` makes directory even the parent is not exists.

Then go inside it:

```bash
$ cd /apps/fortnite
```

To clone repo, just run the following command:

```bash
$ git clone https://github.com/BlackIQ/fortnite-stats-api
```

If you want to clone it in your own name, add your name as argument:

```bash
$ git clone https://github.com/BlackIQ/fortnite-stats-api api
```

### Install packages

Ok, now go inside project:

```bash
$ cd  /apps/fortnite/api
```

Then install dependencies:

```bash
$ npm i
```

### Add your variables in `.env`

To start app, you need to connect it to database, add log file location, your fortnite api key and url and base app data.

Now copy `.env.example` to `.env`:

```bash
$ cp .env.example .env
```

Then let's put our values.

#### Database

I used **MongoDB** and have 2 ways to connect app to database. If you use **Atlas** or any cloud database, just put your connection string for `MONGO_CLOUD`.

But if you want to run it in your local machine or somewhere that have no connection string and want to put your username, password or others, just add values.

```bash
MONGODB_HOST
MONGODB_PORT
MONGODB_COLLECTION
```

#### App

App configurations are like your secret, key, is it production or development and port that app will runs on it.

```bash
APP_PORT # Port
APP_ENVIRONMENT # Production will be true if be production. Anything else will be development
APP_SECRET # The key that JWT will create with
APP_KEY # The api key for bot
```

#### File

Ok, here you must all 2 items. One, directory of log file and the log file name.

```bash
FILE_PATH
FILE_NAME
```

#### Fortnite

Fo inside to [](https://fortnite-api.com) and login or create account and then get your api key.

Then copy key and base api url to your env.

```bash
API_URL # Base URL
API_AUTHORIZATION ## APi Key
```

### Run

No your configuration is ready! Let's run it!

```bash
$ npm test
```