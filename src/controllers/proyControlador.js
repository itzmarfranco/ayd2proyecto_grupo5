const controller = {};


/*
controller.index = function (req, res) {
  var message = '';
  res.render('registro', { message: message });
};*/

controller.alarma = function (req, res) {
  message = "";
  res.render('alarma', {message:''});
}

controller.signup = function (req, res) {
  message = "";
  if (req.method == "POST") {
    //post data
  } else {
    res.render("registro");
  }
};

controller.index = function (req, res) {
  message = "";
  console.log(req.body);
  if (req.method == "POST") {
    var post = req.body;
    var account = post.account;
    var pass = post.password;
    var fname = post.first_name;
    var lname = post.last_name;
    var mail = post.mail;


    var sql =
      "INSERT INTO `usuario`(`nombres`,`apellidos`,`email`,`username`, `password`) VALUES ('" +
      fname +
      "','" +
      lname +
      "','" +
      mail +
      "','" +
      account +
      "','" +
      pass +
      "')";
    req.getConnection((err, conn) => {
      conn.query(sql, function (err, result) {
        if (!err) {
          message = "La cuenta ha sido creada exitosamente.";
          res.render('login.ejs', { message: message });
        } else message = "error";
        res.render('registro.ejs', { message: message });
        console.log(err);
      });
    });
  } else {
    res.render("registro");
  }
};

controller.log_user = function (req, res) {
  var message = "";
  res.render("login", { message: message });
};




controller.login_user = function (req, res) {
  var message = "";

     var post = req.body;
     var name = post.user_name;
     var pass = post.password;

    req.getConnection((err, conn) => {
      conn.query(
        "SELECT * FROM `usuario` WHERE `username`='" +
          name +
          "' and password = '" +
          pass +
          "'", (err, result) => {
            console.log(result);
          if (err) {
                res.json(err);                  
          }

          if (result.length) {
            console.log(result);
    
            
             res.redirect('/'+ result[0].codUsuario+'/alarma'); 
          } else {
            message = "Usuario no registrado.";
            res.render("login.ejs", { message: message });
            //console.log(games);
          }

         
          

        }
      );
    });


};






controller.dashboard = function (req, res, next) {
  var user = req.session.user,
    userId = req.session.userId;

  if (userId == null) {
    res.redirect("/login");
    return;
  }

  res.render("alarma.ejs", { user: user });
};


module.exports = controller;