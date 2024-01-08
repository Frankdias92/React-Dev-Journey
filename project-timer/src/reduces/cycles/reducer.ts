import { ActionTypes } from "./actions";
import { produce, Draft } from "immer";

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CycleState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

interface AddNewCycleAction {
  type: ActionTypes.ADD_NEW_CYCLE;
  payload: { newCycle: Cycle };
}

interface InterruptNewCycleAction {
  type: ActionTypes.INTERRUPT_NEW_CYCLE;
}

interface MarkCurrentCycleAsFinishedAction {
  type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED;
}

type CycleAction =
  | AddNewCycleAction
  | InterruptNewCycleAction
  | MarkCurrentCycleAsFinishedAction;

function updateCycleState(
  state: CycleState,
  updateFunction: (draft: Draft<CycleState>) => void
): CycleState {
  return produce(state, updateFunction);
}

export function cycleReducer(state: CycleState, action: CycleAction) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return updateCycleState(state, (draft) => {
        draft.cycles.push(action.payload.newCycle);
        draft.activeCycleId = action.payload.newCycle.id;
      });

    case ActionTypes.INTERRUPT_NEW_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId
      );
      if (currentCycleIndex < 0) {
        return state;
      }

      return updateCycleState(state, (draft) => {
        draft.activeCycleId = null;
        draft.cycles[currentCycleIndex].interruptedDate = new Date();
      });
    }

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId
      );
      if (currentCycleIndex < 0) {
        return state;
      }

      return updateCycleState(state, (draft) => {
        draft.activeCycleId = null;
        draft.cycles[currentCycleIndex].finishedDate = new Date();
      });
    }

    default:
      return state;
  }
}