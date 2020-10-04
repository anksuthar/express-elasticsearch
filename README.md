Simple Web App Framework using Node.js, Express and Mongo DB synchronize with elasticsearch using Mongoosastic 
=========================================================

# Getting Started

Follow the instructions below to start your server.


## Installing Dependencies

Open your command prompt (Node.js command prompt if you use Windows), `cd` to the root directory of your server and type the following command:

```shell
npm install
```

## Start Server

First, to make your development easy, it's recommended for you to install `nodemon` using `npm`.

```shell
npm install -g nodemon
```

After that, you can start the server using the following command:

```shell
npm start
```

# Creating Your Apps

## Know Inside

This framework use Express 4, and has been integrated to use Jade (for view files) and Passport (for authentication related process). It's also has been configured to properly serve resources with `access_token` query string. All connected to a MySQL database data source.


## Installing Web Dependencies

You can install web dependencies using Bower. All dependencies will be installed on `components` sub-directory inside `public` directory. Don't forget to add additional parameter `--save` to ensure that the new dependency will be persisted to `bower.json` file.

## Routes and models

This framework using Routes, and View to serve your apps. First, Routes will control the logic to interact with your data model and serve it to view that can be navigated to project.

Let's say you have url list below:

```
GET  /Project/
POST /Project/
PATCH /Project/{id}
DELETE /Project/{id}
```

Then, this can be represented using the following controller:

## Extending The Framework

This framework is just a simple framework that can make your work easier. To extend the framework, feel free to see how everything works. Actually, this is very simple. You can see how the logic works in `boot.js` file, and how the authentication when a request processed in `auth.js` file. Beside than that, you can see `app.js` file to see how the component initialized, and at the end, you can just modify and improve to make it your own framework.

# Feedback

If you've any feedback, or encounter some errors, don't hesitate to put something in Issues Page.

