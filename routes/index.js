var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

const promocionesModel = require('./../models/promocionesModel');

/* GET home page. */
router.get('/', async function(req, res, next) {

  var message = null;
  var error = false;

  if (req.query.enviado == '1') {
    message = 'Mensaje enviado correctamente';
  } else if (req.query.enviado == '0') {
    message = 'Hubo un error al enviar el mensaje. Intentá de nuevo.';
    error = true;
  }

  var promociones = await promocionesModel.getPromociones();

  res.render('index', {
    message: message,
    error: error,
    promociones: promociones
  });
});

router.post('/', async (req, res) => {

  var nombre = req.body.name;
  var telefono = req.body.tel;
  var email = req.body.email;
  var texto = req.body.text;

  var obj = {
    to: 'duomarcelo1@gmail.com'
    , subject: 'Contacto desde la web'
    , html: nombre + " se contacto a traves de la web y quiere mas informacion a este correo: " + email + ". <br> Ademas, hizo el siguiente comentario: " + texto + ". <br> Su telefono es: " + telefono
  }

  try {

    var transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail(obj);

    res.redirect('/?enviado=1');

  } catch (error) {
    console.error('Error al enviar el mail:', error);
    res.redirect('/?enviado=0');
  }

});

module.exports = router;
