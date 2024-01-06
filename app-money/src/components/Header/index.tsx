import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from "../NewTransactioModal";
import { CodeSimple } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <CodeSimple size={32} />
          <strong>CodeJourney</strong>
        </div>
        
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>
              Nova Transação
            </NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />

        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}