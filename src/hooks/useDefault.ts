import { useState, type Dispatch, type SetStateAction } from "react";

type State = {
  name: string;
};

export default function useDefault(
  initialState: State,
  defaultState: State
): [State, Dispatch<SetStateAction<State | null>>] {
  const [state, setState] = useState<State | null>(initialState);

  const value =
    state === null || typeof state === "undefined" ? defaultState : state;

  return [value, setState];
}
