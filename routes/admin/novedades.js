var express = require('express');
var router = express.Router();

var promocionesModel = require('./../../models/promocionesModel');


/* ================= LISTADO ================= */

router.get('/', async function(req, res, next) {
    try {

        var promociones = await promocionesModel.getPromociones();

        res.render('admin/novedades', {   //novedades.hbs
            layout: 'admin/layout',
            usuario: req.session.nombre,
            promociones: promociones

         });

    } catch (error) {
        console.log(error);
        next(error);
    }
});


/* ================= AGREGAR ================= */

router.post('/agregar', async (req, res, next) => {
    try {

        var titulo = req.body.titulo;
        var cuerpo = req.body.cuerpo;

        if (titulo != '' && cuerpo != '') {

            await promocionesModel.insertPromocion({
                titulo: titulo,
                cuerpo: cuerpo
            });

        }

        res.redirect('/admin/novedades');

    } catch (error) {
        console.log(error);
        next(error);
    }
});


/* ============ EDITAR (formulario) ========== */

router.get('/editar/:id', async (req, res, next) => {
    try {

        var promocion = await promocionesModel.getPromocionById(req.params.id);

        /* si el id no existe, vuelve al listado */
        if (promocion == undefined) {
            return res.redirect('/admin/novedades');
        }

        var promociones = await promocionesModel.getPromociones();

        res.render('admin/novedades', {
            layout: 'admin/layout',
            usuario: req.session.nombre,
            promociones: promociones,
            editar: promocion

        });

    } catch (error) {
        console.log(error);
        next(error);
    }
});


/* ============ EDITAR (guardar) ============= */

router.post('/editar/:id', async (req, res, next) => {
    try {

        var titulo = req.body.titulo;
        var cuerpo = req.body.cuerpo;

        if (titulo != '' && cuerpo != '') {

            await promocionesModel.updatePromocionById({
                titulo: titulo,
                cuerpo: cuerpo
            }, req.params.id);

        }

        res.redirect('/admin/novedades');

    } catch (error) {
        console.log(error);
        next(error);
    }
});


/* ================= ELIMINAR ================ */

router.post('/eliminar/:id', async (req, res, next) => {
    try {

        await promocionesModel.deletePromocionById(req.params.id);

        res.redirect('/admin/novedades');

    } catch (error) {
        console.log(error);
        next(error);
    }
});


module.exports = router;
