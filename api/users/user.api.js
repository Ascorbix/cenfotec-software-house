const userSchema = require('./user.model'),
      bcrypt = require('bcrypt');

module.exports.registerUser = (req, res, next) => {
  var newUser = Object.assign(new userSchema(), req.body);

  switch (newUser.role) {
    case 'student':
      newUser.birthDate = req.body.birthdate;
      newUser.curriculum = req.body.careers;
      newUser.carrer = req.body.justification;
      newUser.githubUser = req.body.resumeUrl;
      newUser.websiteUrl = req.body.githubUrl;
      newUser.rejectReason = req.body.websiteUrl;
      break;
    case 'professor':
      newUser.specialty = req.body.specialty;
      newUser.councilMember = req.body.councilMember;
      break;
    case 'admin' || 'assistant':
      newUser.jobPosition = req.body.jobPosition;
      break;
  }

  newUser.save((err) => {
    if (err) {
      res.json({
        success: false,
        message: 'Ha ocurrido un error',
        error: err
      });
    } else {
      res.json({
        success: true,
        message: '¡Registrado correctamente!'
      });
    }
  });
};

module.exports.logIn = (req, res, next) => {
  let email = req.body.email,
    password = req.body.password;

  userSchema.findOne({
    email: email
  }, (err, user) => {
    if (err) throw err;

    if (user) {
      user.comparePassword(password, (err, isMatch) => {
        if (err) console.log(err);
        if (!isMatch) {
          console.log('Attempt failed to login with: ' + user.email);
          res.json({
            "error": "Contraseña no coincide, intente nuevamente",
            "condition": "4"
          });
        } else {
          console.log('Password ' + password + ': ', isMatch);
          switch (user.state) {
            case "eligible":
            case "active":
            case "inactive":
              res.json({
                "email" : user.email,
                "role": user.role,
                "condition": "0"
              });
              break;

            case "postulate":
              res.json({
                "error": "Solicitud de registro en revisión",
                "succes": true,
                "condition": "1"
              });
              break;

            case "banned":
              res.json({
                "error": "Usuario bloqueado, contacte administrador",
                "succes": true,
                "condition": "2"
              });
              break;

            case "rejected":
              res.json({
                "error": "Solicitud de registro rechazada",
                "succes": true,
                "condition": "3"
              });
              break;
          };
        };
      });
    } else {
      res.json({
        "error": "Usuario no encontrado, intente de nuevo"
      });
    };
  })
}

module.exports.listUser = (req, res) => {
  userSchema.find().then((usuarios) => {
    res.send(usuarios);
  });
};

module.exports.updateUser = (req, res) => {
  userSchema.findByIdAndUpdate(req.body._id, {
    $set: req.body
  }, (err, user) => {
    if (err) {
      res.json({
        success: false,
        msj: 'No se ha actualizado.' + handleError(err)
      });

    } else {
      res.json({
        success: true,
        msj: 'Se ha actualizado correctamente.' + res
      });
    }
  });
};
