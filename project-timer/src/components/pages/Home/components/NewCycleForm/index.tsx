// import { useForm } from "react-hook-form";
import { useContext } from "react";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles"
import { useFormContext } from "react-hook-form";
import { CycleContext } from "../../../../../contexts/CycleContext";
// import * as zod from 'zod';
// import { zodResolver } from "@hookform/resolvers/zod";


export function NewCycleForm() {
  const { activeCycle } = useContext(CycleContext)
  const { register } = useFormContext()
  
  return (
    <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>

          <TaskInput 
            id="task"
            list="task-sugestions"
            placeholder="Dê um nome para seu projeto"
            disabled={!!activeCycle}
            {...register('task')}
          />

          <datalist id="task-sugestions" >
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>

          <MinutesAmountInput 
            type="number" 
            id="minutesAmount" 
            placeholder="00"
            step={5}
            min={0}
            max={60}
            disabled={!!activeCycle}
            {...register('minutesAmount', { valueAsNumber : true})}
          />

          <span>minutos.</span>
      </FormContainer>
  )
}