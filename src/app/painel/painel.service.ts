import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PainelService {

  getPaineis() {
    return [
      {id: 1, nome: 'Wellington'},
      {id: 2, nome: 'Fidelis'}
    ];
  }

  constructor() { }
}
