import { Reply, Text } from "@botonic/react";
import React from "react";

export default class extends React.Component {
  render() {
    return (
      <>
        <Text>Encontramos seu cpf! Bem vindo nomealuno!</Text>
        <Text>
          Por favor, me informe o que deseja acessar nesse momento.
          <Reply payload="academico">Meu acadêmico</Reply>
          <Reply payload="financeiro">Meu financeiro</Reply>
        </Text>
      </>
    );
  }
}

