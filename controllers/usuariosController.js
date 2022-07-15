const express = require('express');
const path = require('path');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
require('dotenv').config();

// const novoUsuario = Usuario.create({
//   nome: ``,
//   CPF: ``,
//   email: ``,
//   senha: hash,

// })
// return res.status(201).json(novoUsuario);