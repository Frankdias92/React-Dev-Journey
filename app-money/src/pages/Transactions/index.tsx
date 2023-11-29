import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { Searchform } from "./components/SearchForm";
import { PriceHighLigh, TransactionsComponent, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsComponent>

        <Searchform />
        
        <TransactionsTable>
          <tbody>
            <tr>
              <td width='50%' >Desenvolvimento de site</td>
              <td>
                <PriceHighLigh variant="income">
                  R$ 12.000,00
                </PriceHighLigh>
              </td>
              <td>Venda</td>
              <td>28/11/2023</td>
            </tr>

            <tr>
              <td width='50%' >Desenvolvimento de site</td>
              <td>R$ 12.000,00</td>
              <td>Venda</td>
              <td>28/11/2023</td>
            </tr>

            <tr>
              <td width='50%' >Hamburg</td>
              <td>
                <PriceHighLigh variant="outcome">
                  - R$ 39,90
                </PriceHighLigh>
              </td>
              <td>Venda</td>
              <td>22/11/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsComponent>
    </div>
  )
}