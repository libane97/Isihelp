import { IQuestion } from 'app/shared/model/question.model';

export interface ITechno {
  id?: number;
  libelle?: string;
  publish?: boolean;
  question?: IQuestion;
}

export class Techno implements ITechno {
  constructor(public id?: number, public libelle?: string, public publish?: boolean, public question?: IQuestion) {
    this.publish = this.publish || false;
  }
}
