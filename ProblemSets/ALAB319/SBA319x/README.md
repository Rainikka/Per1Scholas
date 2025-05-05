# SBA 319: Fitness Tracker REST API
 A REST API to track Aerobic & Weightlifting Exercises built with Mongoose.db, Express, & Node.js.

## Knowledge Inspiration
This project was inspired by:
- *Web Dev Simplified on YouTube*: "Learn MongoDB" and "Learn Mongoose" tutorials
- *Nishant Kumar on FreeCodeCamp*: "How to Build a RESTful API" tutorial
- *Coding Cleverly on FreeCodeCamp*: "CRUD API" tutorial

## Connection String for Access
PerScholas connection string valid for one week
- *Username:* PerScholas
- *Password* 2025RTT04

## To Test Endpoints Within VS Code
1. In the VS Code root directory of SBA319x, go to the file: 
- **{test.http}**
2. All viable routes are labeled and commented out, uncomment out the one route to test at a time.
3. Once a route is uncommented out, a *Send Request* link will appear above the route link, Click {Send Request}
4. A window parallel to the test.http window will appear with the requested route information.
5. To test another route, comment out the previous and uncomment out the next route for testing and follow steps 1 through 4.

## To Test Endpoints Within Web Browser

## API CRUD EXAMPLES 
- **GET ALL USERS**
GET http://localhost:3000/api/users

- **GET ALL AEROBBIC EXERCISES**
GET http://localhost:3000/api/aerobics

- **GET ALL WEIGHTLIFT EXERCISES**
GET http://localhost:3000/api/weghtlifts

- **GET PRODUCT BY ID**
 GET http://localhost:3000/api/products/6817048d2bbf21f133357882

- **ADD NEW  PRODUCT**
POST http://localhost:3000/api/products
Content-Type: application/json

 [
 {
   "name": "Test Product",
    "quantity": 5,
    "price": 19.99
  },
  {
    "name": "Quality Product",
    "quantity": 15,
    "price": 29.99
  }
 ]

- **UPDATE PRODUCT BY ID**
 PUT  http://localhost:3000/api/products/681704a82bbf21f133357884
Content-Type: application/json

 {
 "name" : "Newer Product",
 "price" : 10.99
 }

- **DELETE PRODUCT BY ID**
DELETE http://localhost:3000/api/products/6817295ba460dac588392613
 Content-Type: application/json

## Desiderata
- All the data models in my head are tabular -- this is a hard left turn.
- Desire to better understang of cross-reference data from diiferent routes.