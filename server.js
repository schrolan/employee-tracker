const express = require("express");
const mysql = require("mysql");
const inquirer = require("inquirer");
const { default: Choices } = require("inquirer/lib/objects/choices");

require("console.table");

const connection = mysql.createConnection({ 
    host: "localhost",
    port: "3000",
    user: "root",
    password: "ILikeButts!",
    database: "employeeDB"
})

connection.connect(function (err) {
    if (err) throw err;
    promptOne();
  });

  function promptOne() {
    inquirer
        .prompt({
            type: "list",
            name: "option",
            message: "What would you like to do?",
            choices: [
                "view all departments",
                "view all roles",
                "view all employees",
                "add a department",
                "add a role",
                "add an employee",
                "update an employee role",
                "stop"
            ]
        })
  }