import { ReactNode, createContext, useEffect, useReducer, useState} from "react";
import { Cycle, cycleReducer } from "../reduces/cycles/reducer";
import { MarkCurrentCycleAsFinishedAction, addNewCycleAction, interruptCycleAction } from "../reduces/cycles/actions";
import { differenceInSeconds } from "date-fns";

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CycleContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCycle: () => void
}


export const CycleContext = createContext({} as CycleContextType)

interface CycleContextProviderProps {
  children: ReactNode
}

export function CycleContextProvider({ 
  children 
}: CycleContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(cycleReducer, {
    cycles: [],
    activeCycleId: null,
  }, 
  (initialState) => {
    const storeStateAsJSON = localStorage.getItem('@timer-React-franklin: cycles-state')

      if (storeStateAsJSON) {
        return JSON.parse(storeStateAsJSON)
      }

      return initialState
  })

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id == activeCycleId);
  
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(
        new Date(),
        new Date(activeCycle.startDate)
      )
    }

    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@timer-React-franklin: cycles-state', stateJSON)
  }, [cyclesState])

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }
  function markCurrentAsFinished() {
    dispatch(MarkCurrentCycleAsFinishedAction())
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),     
    }

    dispatch(addNewCycleAction(newCycle))

    setAmountSecondsPassed(0);
  }

  function interruptCycle() {
    dispatch(interruptCycleAction())
  }
  
  return (
    <CycleContext.Provider 
    value={{ 
      cycles,
      activeCycle, 
      activeCycleId, 
      markCurrentAsFinished,
      amountSecondsPassed,
      setSecondsPassed,
      createNewCycle,
      interruptCycle
    }}>
  
      { children }
    </CycleContext.Provider>
  )
}