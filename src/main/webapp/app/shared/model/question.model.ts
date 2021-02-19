import { Moment } from 'moment';
import { ITechno } from 'app/shared/model/techno.model';
import { ILangage } from 'app/shared/model/langage.model';
import { ICommentaire } from 'app/shared/model/commentaire.model';

export interface IQuestion {
  id?: number;
  libelle?: string;
  date?: Moment;
  cloturer?: boolean;
  technos?: ITechno[];
  langages?: ILangage[];
  commentaires?: ICommentaire[];
}

export class Question implements IQuestion {
  constructor(
    public id?: number,
    public libelle?: string,
    public date?: Moment,
    public cloturer?: boolean,
    public technos?: ITechno[],
    public langages?: ILangage[],
    public commentaires?: ICommentaire[]
  ) {
    this.cloturer = this.cloturer || false;
  }
}
