#!/usr/bin/env node

var shell = require("shelljs");
shell.exec('echo $(tput setaf 2)Bem-vindo$(tput sgr0) a instalação do curso Personalização de Livros.');
shell.exec("echo $(tput setaf 1) $(tput setab 7)Clique abaixo$(tput sgr0) para que o processo de instalação continue");
shell.exec("clasp login");

//https://github.com/petermbenjamin/npm-petermbenjamin


//Baixar do npm
//npm pack @aprender.digital/personalizar
//Descompactar
//tar -xvzf aprender.digital-personalizar-0.5.1.tgz


//npm version major | minor | patch
//npm publish
//git clone

