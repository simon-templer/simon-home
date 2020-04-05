import {Project} from "../model/project";
import projects from '../model/projects.json';

export interface IProjectState {
  projects: Project[];
}

export const initiaProjectState: IProjectState = {
  projects: projects,
};
