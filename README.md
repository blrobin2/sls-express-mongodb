# sls-express-mongodb
A sample Serverless (https://serverless.com/) app using Express and MongoDB
Follows https://dev.to/adnanrahic/a-crash-course-on-serverless-apis-with-express-and-mongodb-193k

## How it works
In the serverless.yaml, you provide the config details, including how to enter the app. In this case, it enters through the run function in the server.js file. server.js just takes the server definined in lib/app and wraps it in the serverless-http library, so that it can be deployed.

As you can tell, serverless doesn't host the DB (all it can do is run the code and libraries provided), so I'm hosting on MongoDB Atlas (https://cloud.mongodb.com/).

It uses Mongoose for a Mongo ORM, Helmet for some extra protection in the HTTP headers, and basic Express for the rest.

## Production Link:
https://g7h2kyttxk.execute-api.us-east-1.amazonaws.com/production/api/notes/
