var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('inicio', { pagina: 'Inicio' });
});

router.get('/Inicio', function(req, res, next) {
    res.render('inicio', { pagina: 'Inicio' });
});

router.get('/Perfil', function(req, res, next) {
    res.render('perfil',
        {
            pagina: 'Perfil',
            id: 0 ,
            top: ["Cancion 1","Cancion 2","Cancion 3","Cancion 4","Cancion 5"],
            playlist: ["PlayList 1","PlayList 2","PlayList 3","PlayList 4","PlayList 5"]
        }
    );
});

router.get('/Generos', function(req, res, next) {
    res.render('generos', { pagina: 'Generos' });
});

router.get('/Chats', function(req, res, next) {
    res.render('chats', { pagina: 'Chats' });
});
module.exports = router;
