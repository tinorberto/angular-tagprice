export class Local {
  idLocal: number;
  nomeLocal: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}