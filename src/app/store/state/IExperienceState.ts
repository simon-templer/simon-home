import {Experience} from "../model/experience";
import experiences from '../model/experiences.json';

export interface IExperienceState {
  experiences: Experience[];
}

export const initialExperienceState: IExperienceState = {
  experiences: experiences,
};
