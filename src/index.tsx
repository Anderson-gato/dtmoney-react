import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    // pré cadastrando itens no banco de dados (apenas para ficar masi amigavel )
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de app',
          type: 'deposit',
          category: 'Desenvolvimento',
          amount: 7000,
          createAt: new Date('2022-01-31 12:30:20')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'casa',
          amount: 1000,
          createAt: new Date('2022-02-01 09:50:15')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
