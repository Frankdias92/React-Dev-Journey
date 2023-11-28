import { HandPalm, Play} from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from "zod";

// import { differenceInSeconds } from "date-fns";

import {  
  HomeContainer, 
  StartCountdownButton, 
  StopCountdownButton, 
} from "./styles";

import { CountDown } from "./components/CountDown";
import { NewCycleForm } from "./components/NewCycleForm";
import { CycleContext } from "../../../contexts/CycleContext";
import { useContext } from "react";


  const newCycleFormValidationSchema = zod.object({
    task: zod
      .string()
      .min(1, 'Informe a tarefa'),
    minutesAmount: zod
      .number()
      .min(1, 'O ciclo precisa ser de no máximo 60 minutos.')
      .max(60, 'O ciclo precisa ser de no máximo 60 minutos.')
  })

  type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

  export function Home() {
    const { activeCycle ,createNewCycle, interruptCycle } = useContext(CycleContext)

    const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }


  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form 
        onSubmit={handleSubmit(handleCreateNewCycle)} 
        action=""
      >
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <CountDown />

        {activeCycle ? (
          <StopCountdownButton
          type="submit"
          onClick={interruptCycle}
        >
          <HandPalm size={24} />
          Interromper
        </StopCountdownButton>
        ) : (
          <StartCountdownButton 
            disabled={isSubmitDisabled} 
            type="submit"
          >
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}

      </form>
    </HomeContainer>
  )
}