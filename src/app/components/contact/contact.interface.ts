import {ILink} from './link.interface';

export interface IContact {
  headerI18n: string;
  descriptionI18n: string;
  email: string;
  phoneNumber: string;
  links: ILink[];
}
