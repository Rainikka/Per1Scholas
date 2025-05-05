# SBA 319: Fitness Tracker REST API
A REST API to track Aerobic & Weightlifting Exercises of Individual Users.

## Knowledge Inspiration
This project was inspired by:
- **WebDevSimplified** on YouTube: "Learn MongoDB" and "Learn Mongoose" tutorials
- **Nishant Kumar** on FreeCodeCamp: "How to Build a RESTful API" tutorial
- **Coding Cleverly** on FreeCodeCamp: "CRUD API" tutorial

## Connection String
PerScholas connection string valid for one week
- **Usernamed** PerScholas
- **Password** 2025RTT04

## To Test API
**Internal Test:** 
- **Password** 2025RTT04
- **Password** 2025RTT04
GET http://localhost:3001/fruits or http://localhost:3001/

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