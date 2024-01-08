import { Cycle } from "./reducer";

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_NEW_CYCLE = 'INTERRUPT_NEW_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED'
}

interface AddNewCycleAction {
  type: ActionTypes.ADD_NEW_CYCLE;
  payload: {
    newCycle: Cycle;
  };
}

interface MarkCurrentCycleAsFinishedAction {
  type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED;
}

interface InterruptCycleAction {
  type: ActionTypes.INTERRUPT_NEW_CYCLE;
}

export type CycleAction =
  | AddNewCycleAction
  | MarkCurrentCycleAsFinishedAction
  | InterruptCycleAction;

export function addNewCycleAction(newCycle: Cycle): AddNewCycleAction {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  };
}

export function markCurrentCycleAsFinishedAction(): MarkCurrentCycleAsFinishedAction {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  };
}

export function interruptCycleAction(): InterruptCycleAction {
  return {
    type: ActionTypes.INTERRUPT_NEW_CYCLE,
  };
}
