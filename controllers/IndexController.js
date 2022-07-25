const express = require('express');
const path = require('path');

const IndexController = {
    verPaginaInicial: (req, res) => {
        res.render('home', {
            title: "Página Inical"
        });
    },


    verPaginaContato: (req, res) => {


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
        res.render('registrar', {
            title: "MEDPET - REGISTER"
        })
    },

    UsuariosControlerRegistrar: (req, res) => {
        res.render('registrar', {
            title: "MEDPET - REGISTRAR"
        })
    },

    verPaginaDeHome01: (req, res) => {
        res.render('home01', {
            title: "MEDPET - HOME"
        })
    },

    verPaginaHomeConsultorio: (req, res) => {
        res.render('home-consultorio2', {
            title: "MEDPET - HOME - CONSULTORIO"
        })
    },

    verPaginaCadastrarPet: (req, res) => {
        res.render('cadastrar-pet', {
            title: "MEDPET - CADASTRAR PET"
        })
    },

    verPaginaDeCadastrarConsultorio: (req, res) => {
        res.render('cadastrar-consultorio', {
            title: "CADASTRAR - CONSULTORIO"
        })
    },

    verPaginaDeServicos: (req, res) => {
        res.render('servicos',{
            title: "SERVIÇOS"
        })
    }
}

module.exports = IndexController;