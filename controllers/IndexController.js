const express = require('express');
const path = require('path');

const IndexController = {
    verPaginaInicial: (req, res) => {
        res.render('home', {
            title: "Página Inical"
        });
    },


    verPaginaContato: (req, res) => {
        /* let listaDeContatos = require('./contatos.json'); */

        res.render('contato', {
            title: "contato", 
         })
         
    },

    verPaginaDeProdutos: (req, res) => {
        res.render('produto', {
            title: "Página de Produtos"
        })
    },

    verPaginaDeLogin: (req, res) => {
        res.render('login', {
            title: "MEDPET - LOGIN"
        })
    },

    verPaginaDeRegistro: (req, res) => {
        res.render('register', {
            title: "MEDPET - REGISTER"
        })
    },

    verPaginaDeHome01: (req, res) => {
        res.render('home01', {
            title: "MEDPET - HOME"
        })
    },
    
    verPaginaDeCadastrarConsultorio: (req, res) => {
        res.render('cadastrar-consultorio', {
            title: "CADASTRAR - CONSULTORIO"
        })
    }
}

module.exports = IndexController;