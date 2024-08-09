import React from 'react'
import { Reply, Text } from '@botonic/react'

export default class extends React.Component {
    render() {
      return (
        <>
          <Text>
            Ótimo! Vamos prosseguir! Por gentileza, me diga se você é aluno ou
            visitante!
            <Reply payload="aluno">Aluno</Reply>
            <Reply payload="visitante">Visitante</Reply>
          </Text>
        </>
      );
    }


  }