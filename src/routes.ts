import Aceite from './actions/aceite-termos'
import BemVindo from './actions/bemvindo'
import Continuar from './actions/continuar'
import Finalizar from './actions/finalizar-atendimento'
import MenuEscolhas from './actions/menu-escolhas'
import Aluno from './actions/sou-aluno'
import Visitante from './actions/visitante'

export const routes = [
  {
    path: 'bem-vindo',
    text: /oi|ola|oie|boa noite|boa tarde|bom dia/,
    action: BemVindo,
    childRoutes: [
        {
          path: 'continuar-atendimento',
          text: /processeguir|quero continuar|continuar|sim|confirmar/,
          payload: 'continuar',
          action: Continuar,
          childRoutes:[
            {
                path: 'escolher-funcao',
                text: /aluno/,
                payload: 'aluno',
                action: Aluno,
                childRoutes:[
                  {
                  path: 'confirmar-cpf',
                  text: /12345678901/,
                  action: Aceite,
                  childRoutes:[
                    {
                      path: 'aceitar-termos',
                      text: /aceito|processeguir|quero continuar|continuar|sim|confirmar/,
                      payload: 'aceito-termos',
                      action: MenuEscolhas,
                      childRoutes:[]
                    },
                      {
                        path: 'nao-aceitar',
                        text: /finalizar|nao|2|sair/,
                        payload: 'finalizar',
                        action: Finalizar,
                      }
                  ]
                  }
                ]
            },
            {
                path: 'escolher-funcao',
                text: /visitante/,
                payload:'visitante',
                action: Aceite,
                childRoutes:[
                {
                path: 'visitante',
                text: /visitante/,
                payload:'aceito-termos',
                action: Visitante,
                },
                {
                path: 'nao-aceitar',
                text: /finalizar|nao|2|sair/,
                payload: 'finalizar',
                action: Finalizar,
                }
          ]

            }
          ]
        },
        {
          path: 'finalizar-atendimento',
          text: /finalizar|nao|2|sair/,
          payload: 'finalizar',
          action: Finalizar,
        }
    ]
  }
]