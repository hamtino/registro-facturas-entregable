import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../../factura/factura.service';
import { Factura } from '../../factura/factura';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  factura: Factura[] = [];
  
  // constructor() { }
  constructor(public personaService: FacturaService) { }
  

  ngOnInit(): void {
   
    this.personaService.getAll().subscribe((data: Factura[])=>{
      this.factura = data;
      console.log(this.factura);
    })
  }

  deletePerson(id){
    console.log("id" + id);
    this.personaService.delete(id).subscribe(res => {
         this.factura = this.factura.filter(item => item.id !== id);
         console.log('Person deleted successfully!');
    })
  }
 
}
