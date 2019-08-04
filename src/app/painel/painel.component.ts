import { FclrecebComponent } from './../../../../formulario/front/src/app/fclreceb/fclreceb.component';
import { Component, OnInit, NgModule } from '@angular/core';
import { PainelService } from './painel.service';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  paineis: any [];

  constructor(private painelService: PainelService) { }

  ngOnInit() {
    this.paineis = this.painelService.getPaineis();
  }

}
