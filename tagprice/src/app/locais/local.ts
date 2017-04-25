export class Local {
  id: number;
  nome: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}