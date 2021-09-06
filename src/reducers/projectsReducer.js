import { types } from "../types/types";

const initialState = {
  projects: [],
  active: null
}

export const projectsReducer = (state = initialState, action) => {

  switch (action.type) {

    case types.projectsActive:
      return {
        ...state,
        active: {
          ...action.payload
        }
      }

    case types.projectsAddNew:
      return {
        ...state,
        projects: [action.payload, ...state.projects]
      }

    case types.projectsLoad:
      return {
        ...state,
        projects: [...action.payload]
      }

    case types.projectsUpdated:
      return {
        ...state,
        projects: state.projects.map(
          project => project.id === action.payload.id
          ? action.payload.project
          : project
        )
      }

    case types.projectsDelete:
      return {
        ...state,
        active: null,
        projects: state.projects.filter(project => project.id !== action.payload)
      }

    default:
      return state
  }
}