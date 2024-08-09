import { Reply, Text } from "@botonic/react";
import React from "react";

export default class extends React.Component {
  render() {
    return (
      <>
        <Text>
          Seja muito bem vindo ao Unipam!! Por favor, me informe se você
          concorda com os termos da Unipam. (link-pros-termos)
        </Text>
        <Reply payload="aceito-termos">Aceitar</Reply>
        <Reply payload="finalizar">Finalizar</Reply>
      </>
    );
  }
}

