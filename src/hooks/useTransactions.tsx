import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext
} from 'react'
import { api } from '../components/services/api'

interface Transaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createAt'> //* vai pegar todos os tipos menos id e createAt

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

const TransactionContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData //? as TransactionsContextData -> estou confirmando que é do tipo TransactionsContextData
) //* inicinado o context com um array vazio

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createAt: new Date()
    }) //* ligando o data com a apis
    const { transaction } = response.data //* pegando a resposta que foi enviado na hora de cadastrar um novo item

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionContext)

  return context
}
