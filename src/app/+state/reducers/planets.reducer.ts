import { ESelectAction, IPlanet } from 'src/app/models';
import { PlanetsActions, PlanetsActionTypes } from '../actions';

export interface PlanetsState {
  planets: IPlanet[];
  selectedPlanets: string[];
  loading: boolean;
  loaded: boolean;
}

export const initialPlanetsState: PlanetsState = {
  planets: [],
  selectedPlanets: [],
  loading: false,
  loaded: false
};

export function planetsReducer(
  state = initialPlanetsState,
  action: PlanetsActions
): PlanetsState {
  switch (action.type) {
    case PlanetsActionTypes.GetPlanets:
      return {
        ...state,
        loading: true
      };
    case PlanetsActionTypes.GetPlanetsSuccess:
      return {
        ...state,
        planets: action.payload,
        loading: false,
        loaded: true
      };
    case PlanetsActionTypes.GetPlanetsFail:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    case PlanetsActionTypes.UpdateSelectedPlanets:
      let selectedPlanets = state.selectedPlanets.slice();
      if (
        action.actionType === ESelectAction.Add &&
        selectedPlanets.indexOf(action.planet.name) == -1
      ) {
        selectedPlanets.push(action.planet.name);
        return {
          ...state,
          selectedPlanets: selectedPlanets
        };
      } else if (action.actionType === ESelectAction.Remove) {
        let selectedIndex = state.selectedPlanets.findIndex(
          (x) => x == action.planet.name
        );
        if (selectedIndex !== -1) {
          selectedPlanets.splice(selectedIndex, 1);
          return {
            ...state,
            selectedPlanets: selectedPlanets
          };
        }
      }
    default:
      return state;
  }
}
