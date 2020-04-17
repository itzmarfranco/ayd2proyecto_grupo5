const controller={};



controller.index = function(req, res){
    var message = '';
    res.render('registro',{message: message});
  };
  


  module.exports =controller;