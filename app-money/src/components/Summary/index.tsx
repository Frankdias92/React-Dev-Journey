import { ArrowCircleUp, ArrowCircleDown } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { CurrencyDollar } from "@phosphor-icons/react/dist/ssr";
import { priceFormatter } from "../../utilis/formatter";
import { useSummary } from "../../hooks/useSummary";


export function Summary() {  
  const summary = useSummary();
  
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entrada</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>
      
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>

    </SummaryContainer>
  )
}