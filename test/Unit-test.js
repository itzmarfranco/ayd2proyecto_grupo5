QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Hello World!" );
});

Cuenta = function (nocuenta, nombre, apellido, dpi, saldoini, correo, contra) {
  this.nocuenta = nocuenta;
  this.nombre = nombre;
  this.apellido = apellido;
  this.dpi = dpi;
  this.saldoini = saldoini;
  this.correo = correo;
  this.contra = contra
}




//Pruebas de Login y de Registro

function simularbddpi(dpi,cuenta1,cuenta2,cuenta3){
        if(dpi==cuenta1.dpi){
            return false
        }
        if(dpi==cuenta2.dpi){
            return false
        }
        if(dpi==cuenta3.dpi){
            return false
        }
        return true
    }
    function simularbdcorreo(correo,cuenta1,cuenta2,cuenta3){
        if(correo==cuenta1.correo){
            return false
        }
        if(correo==cuenta2.correo){
            return false
        }
        if(correo==cuenta3.correo){
            return false
        }
        return true
    }

    function passwcoinciden(pass,confpass){
        if(pass==confpass){
            return true;
        }
        return false;
    }
    function simularbd(user,pass,cuenta1,cuenta2,cuenta3){
        if(user==cuenta1.correo){
            if(pass==cuenta1.contra){
                return true
            }else{
                return false
            }
        }
        if(user==cuenta2.correo){
            if(pass==cuenta2.contra){
                return true
            }else{
                return false
            }
        }
        if(user==cuenta3.correo){
			
            if(pass==cuenta3.contra){
                return true
            }else{
                return false
            }
        }
        return false
    }

  


QUnit.test('Crear Cuenta con DPI ya asignado', function (assert) {
    let cuenta1 = new Cuenta(1, "Juan", "Pérez", 3297999401108, 11.00, "juan@gmail.com", "juan123");
    let cuenta2 = new Cuenta(2, "Pedro", "Paz", 3297999401105, 0.00, "pedro@gmail.com", "pedro123");
    let cuenta3 = new Cuenta(3, "Cerre", "Ciete", 7777777777, 0.00, "cr7@gmail.com", "123");

    var nombre="Martinoli"
    var apellido="Garcia"
    var dpi="7777777777"
    var correo="martinoli@gmail.com"
    var pass="123"
    var confpass="123"

    assert.notOk(simularbddpi(dpi,cuenta1,cuenta2,cuenta3), dpi+ " DPI asignado a otra cuenta");
  });

  QUnit.test('Crear una cuenta con correo duplicado', function (assert) {
    let cuenta1 = new Cuenta(1, "Juan", "Pérez", 3297999401108, 11.00, "juan@gmail.com", "juan123");
    let cuenta2 = new Cuenta(2, "Pedro", "Paz", 3297999401105, 0.00, "pedro@gmail.com", "pedro123");
    let cuenta3 = new Cuenta(3, "Cerre", "Ciete", 7777777777, 0.00, "cr7@gmail.com", "123");

    var nombre="Martinoli"
    var apellido="Garcia"
    var dpi="848421548"
    var correo="pedro@gmail.com"
    var pass="123"
    var confpass="123"
    assert.notOk(simularbdcorreo(correo,cuenta1,cuenta2,cuenta3), correo+" Correo ya utilizado en otra cuenta");
  });

  QUnit.test('Password de confirmacion no coincidente', function (assert) {
    let cuenta1 = new Cuenta(1, "Juan", "Pérez", 3297999401108, 11.00, "juan@gmail.com", "juan123");
    let cuenta2 = new Cuenta(2, "Pedro", "Paz", 3297999401105, 0.00, "pedro@gmail.com", "pedro123");
    let cuenta3 = new Cuenta(3, "Cerre", "Ciete", 7777777777, 0.00, "cr7@gmail.com", "123");

    var nombre="Martinoli"
    var apellido="Garcia"
    var dpi="848421548"
    var correo="martnoli@gmail.com"
    var pass="1234"
    var confpass="1235"
    assert.notOk(passwcoinciden(pass,confpass), "Pass  no coinciden");
  });

  QUnit.test('Ingreso de datos correcto', function (assert) {
    let cuenta1 = new Cuenta(1, "Juan", "Pérez", 3297999401108, 11.00, "juan@gmail.com", "juan123");
    let cuenta2 = new Cuenta(2, "Pedro", "Paz", 3297999401105, 0.00, "pedro@gmail.com", "pedro123");
    let cuenta3 = new Cuenta(3, "Cerre", "Ciete", 7777777777, 0.00, "cr7@gmail.com", "123");

    var nombre="Martinoli"
    var apellido="Garcia"
    var dpi="848421548"
    var correo="martnoli@gmail.com"
    var pass="1234"
    var confpass="1234"
    var resultado=false
    if(simularbddpi(dpi,cuenta1,cuenta2,cuenta3)&&passwcoinciden(pass,confpass)&&simularbdcorreo(correo,cuenta1,cuenta2,cuenta3)){
        resultado = true
    }
    assert.ok(resultado, "Datos correctos para ingresar a la BD");
  });
  

    
    
	
  QUnit.test('Ingresar con correo inexistente', function (assert) {
    let cuenta1 = new Cuenta(1, "Juan", "Pérez", 3297999401108, 11.00, "juan@gmail.com", "juan123");
    let cuenta2 = new Cuenta(2, "Pedro", "Paz", 3297999401105, 0.00, "pedro@gmail.com", "pedro123");
    let cuenta3 = new Cuenta(3, "Cerre", "Ciete", 7777777777, 0.00, "cr7@gmail.com", "123");

    var userlog="martinoli@gmail.com"
    var passlog="123"

    assert.notOk(simularbd(userlog,passlog,cuenta1,cuenta2,cuenta3), "Usuario incorrecto");
  });

  QUnit.test('Ingresar con pass incorrecta', function (assert) {
    let cuenta1 = new Cuenta(1, "Juan", "Pérez", 3297999401108, 11.00, "juan@gmail.com", "juan123");
    let cuenta2 = new Cuenta(2, "Pedro", "Paz", 3297999401105, 0.00, "pedro@gmail.com", "pedro123");
    let cuenta3 = new Cuenta(3, "Cerre", "Ciete", 7777777777, 0.00, "cr7@gmail.com", "123");

    var userlog="juan@gmail.com"
    var passlog="123"

    assert.notOk(simularbd(userlog,passlog,cuenta1,cuenta2,cuenta3), "Pass incorrecto");
  });

  QUnit.test('Ingresar con pass correcta', function (assert) {
    let cuenta1 = new Cuenta(1, "Juan", "Pérez", 3297999401108, 11.00, "juan@gmail.com", "juan123");
    let cuenta2 = new Cuenta(2, "Pedro", "Paz", 3297999401105, 0.00, "pedro@gmail.com", "pedro123");
    let cuenta3 = new Cuenta(3, "Cerre", "Ciete", 7777777777, 0.00, "cr7@gmail.com", "123");

    var userlog="juan@gmail.com"
    var passlog="juan123"

    assert.ok(simularbd(userlog,passlog,cuenta1,cuenta2,cuenta3), "Ingreso debe ser correcto");
  });

/* Prueba de Perfil */

function simularDisenoPagina(nombre,apellido,cuenta,saldo,correo){
  this.nombre=nombre;
  this.apellido=apellido;
  this.cuenta=cuenta;
  this.saldo=saldo;
  this.correo=correo;      
}

function simularVariablesDeSesion(value){
    this.key = value;
}

QUnit.test('Acceso a los componentes de la pagina', function (assert) {
  let cuenta = new Cuenta(1, "Juan", "Pérez", 3297999401108, 11.00, "juan@gmail.com", "juan123");
  let pagina = new simularDisenoPagina(cuenta.nombre,cuenta.apellido,cuenta.nocuenta,cuenta.saldoini,cuenta.correo);    
  let result = pagina.nombre;
  let expected = cuenta.nombre;
  console.log(result)
  assert.equal(result, expected, "Se accede correctamente");
});

QUnit.test('Testing usuario Loggeado', function (assert) {
  let sessionStorage = new simularVariablesDeSesion(25467);
  let sessionStorage2 = new simularVariablesDeSesion("Juan");  
  let cuenta = sessionStorage.key;
  let user = sessionStorage2.key;
  let result = cuenta==25467 && user=="Juan"

  assert.ok(result, "Se guardan las variables de sesion");
});