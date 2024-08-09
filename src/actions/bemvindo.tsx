import { Text, Reply } from "@botonic/react";
import React from "react";

export default class extends React.Component {
  render() {
    return (
      <>
        <Text>
          Olá! Tudo bem com você? Eu sou o Chatbot Educaional do UNIPAM e vou
          auxiliar você no atendimento de agora em diante! ☺️
        </Text>
        <Text>
          No entanto, antes de continuarmos com o atendimento, preciso que você
          concorde com a nossa política de privacidade! Ao prosseguir com o
          atendimento, declaro que concordo com a Política de Privacidade.
          Selecione uma opção para dar início ao atendimento:
          <Reply payload='continuar'>Continuar</Reply>
          <Reply payload='finalizar'>Finalizar</Reply>
        </Text>
      </>
    );
  }
}


