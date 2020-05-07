const controller = {};



controller.index = function (req, res) {
  var message = '';
  res.render('registro', { message: message });
};

controller.alarma = function (req, res) {
  res.render('alarma', {});
}

module.exports = controller;