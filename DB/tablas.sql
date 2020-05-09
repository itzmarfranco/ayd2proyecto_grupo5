drop database proyecto;
 CREATE database proyecto;
 use  proyecto;


CREATE TABLE usuario (
    codUsuario   INTEGER NOT NULL AUTO_INCREMENT,
    nombres       VARCHAR(200) NOT NULL,
    apellidos     VARCHAR(200) NOT NULL,
    email		VARCHAR(300) NOT NULL,
    username     VARCHAR(100) NOT NULL,
    password   VARCHAR(50) NOT NULL,
    PRIMARY KEY ( codUsuario )
);