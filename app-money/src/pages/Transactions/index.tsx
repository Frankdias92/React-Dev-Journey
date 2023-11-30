import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { Searchform } from "./components/SearchForm";
import { useContextSelector } from "use-context-selector"

import { PriceHighLigh, TransactionsComponent, TransactionsTable } from "./styles";


import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utilis/formatter";



export function Transactions() {

  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  }
  );
  
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsComponent>

        <Searchform />
        
        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width='50%' >{transaction.description}</td>
                  <td>
                    <PriceHighLigh variant={transaction.type}>

                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighLigh>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                </tr>


              )
            })}
           
          </tbody>
        </TransactionsTable>
      </TransactionsComponent>
    </div>
  )
}