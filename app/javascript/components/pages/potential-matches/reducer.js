import { fromJS, Map } from "immutable";
import * as Actions from "./actions";
import NAMESPACE from "./namespace";

const DEFAULT_STATE = Map({});

const reducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case Actions.POTENTIAL_MATCHES:
      return state.set("potentialMatches", fromJS(payload.data));
    default:
      return state;
  }
};

export const reducers = { [NAMESPACE]: reducer };