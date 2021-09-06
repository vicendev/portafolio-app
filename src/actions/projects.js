import {
  getDataPortafolioAPI,
  getDataByIdPortafolioAPI
} from "../api/portafolio-api";
import { types } from "../types/types";

export const activeProject = (id, project) => ({
  type: types.projectsActive,
  payload: {
    id,
    ...project
  }
})

export const startLoadingProjects = () => {
  return async (dispatch) => {
    const projects = await getDataPortafolioAPI("/projects");
    dispatch(setProjects(projects))
  }
}

export const setProjects = (projects) => ({
  type: types.projectsLoad,
  payload: projects
})