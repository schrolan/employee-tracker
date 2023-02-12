const express = require("express");
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ILikeButts!",
    database: "nodemysql",
  });

  db.connect((err) => {

    if (err) {
  
      throw err;
  
    }
  
    console.log("MySql Connected");
  
  });