var express = require('express');
var firebase = require('firebase');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('inicio', { titulo: 'Inicio', pagina: 'Inicio' });
});

router.get('/Login', function(req, res, next) {
    res.render('Login', { titulo: 'login', pagina: 'login' });
});


router.get('/Inicio', function(req, res, next) {
    res.render('inicio', { titulo: 'Inicio', pagina: 'Inicio' });
});

router.get('/Perfil', function(req, res, next) {
    res.render('perfil',
        {
            titulo: 'Perfil',
            pagina: 'Perfil',
            id: 0 ,
            top: ["Cancion 1","Cancion 2","Cancion 3","Cancion 4","Cancion 5"],
            playlist: ["PlayList 1","PlayList 2","PlayList 3","PlayList 4","PlayList 5"]
        }
    );
});

router.get('/Perfil/Ajustes', function(req, res, next) {
    res.render('Ajustes',
        {
            titulo: 'Ajustes',
            pagina: 'Ajustes',
            id: 0
        }
    );
});

router.get('/Perfil/Top-Canciones', function(req, res, next) {
    res.render('Top-Canciones',
        {
            titulo: 'Top-Canciones',
            pagina: 'Top Canciones',
            id: 0
        }
    );
});

router.get('/Perfil/PlayList', function(req, res, next) {
    res.render('PlayList',
        {
            titulo: 'PlayList',
            pagina: 'PlayList',
            id: 0
        }
    );
});

router.get('/Generos', function(req, res, next) {
    res.render('generos', { titulo: 'Generos', pagina: 'Generos' });
});

router.get('/Chats', function(req, res, next) {
    res.render('chats', { titulo: 'Chats', pagina: 'Chats' });
});


router.get('/Registro', function(req, res, next) {
    res.render('registro', { titulo: 'Chats', pagina: 'Chats' });
});


router.post('/registro',function(req, res, next) {

    console.log(req.body)
    var usuarios = firebase.database().ref("usuarios/");
    
    usuarios.push({
            "nombre": req.body.user,
            "password": req.body.password
        });
    //res.render('Login', { titulo: 'Login', pagina: 'Login' });



});


module.exports = router;
