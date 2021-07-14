import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../persona/persona.service';
import { FacturaService } from '../../factura/factura.service';
import { Persona } from '../../persona/persona';
import { ItemfacturaService } from '../../itemfactura/itemfactura.service';
import { Itemfactura } from '../../itemfactura/itemfactura';
import { ItemService } from '../../item/item.service';
import { Item } from '../../item/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facturar',
  templateUrl: './facturar.component.html',
  styleUrls: ['./facturar.component.css']
})
export class FacturarComponent implements OnInit {
  // constructor() { }
  constructor(public itemfacturaService: ItemfacturaService, public personaService: PersonaService, public itemService: ItemService, public facturaService: FacturaService,
    private router: Router) {
      console.log(this);
    this.getpersonas();
   }

  keyword = 'nombre';
  keyword2 = 'descripcion';
  
  public data: [];
  public data2: [];
  
  public data3: [{producto: "String", cantidad: 10, precio: 5}];
  public data4 = [];
  public nitemisor: 0;
  public emisor: 0;
  public receptor: 0;
  public nitreceptor: 0;
  public producto: string;
  public precio: number = 0;
  public cantidad: number = 0;
  public id: number = 0;
  public iva: number = 0;
  public total: number = 0;
  public subtotal: number = 0;

  detallesfact(){
    this.data4.push({id: this.id, producto: this.producto, cantidad: this.cantidad, precio: this.precio, total: this.cantidad * this.precio});
    console.log(this.data4);
    this.valorestotales();
  }

  guardar(){
    var datag = {emisor: this.emisor.toString(), receptor: this.receptor.toString(), valor: this.subtotal.toString(), iva: this.iva.toString(), total: this.total.toString()};
    var idfactura = 0;
    console.log(this);
    var sel = this;
    this.facturaService.create(datag).subscribe(res => {
      this.data4.forEach(function(e){

        //{id: 1, producto: "arroz", cantidad: 1, precio: 1800, total: 1800}
        var datai = {factura: res.id.toString(), items: e.id.toString(), cantidad: e.cantidad.toString(), precioUnitario: e.precio.toString(), total: e.total.toString()};
        console.log(datai);
        console.log(sel);
        sel.itemfacturaService.create(datai).subscribe(res => {
             
        })

      });

      this.router.navigateByUrl('index');
    })
    console.log("idfactura");
    console.log(idfactura);
    

  }

  eliminaelemento(e){
    console.log("eliminar" + e)
    this.data4.splice(e, 1);
    this.valorestotales();
  }

  valorestotales(){
    var total = 0;
    this.data4.forEach(function(e){
      total = total + e.total;
    });
    this.subtotal = total;
    this.iva = this.subtotal * 0.19;
    this.total = this.subtotal * 1.19;
  }


  selectEvent(item) {
    this.nitemisor = item.nit;
    this.emisor = item.id;
    // do something with selected item
  }
  selectEvent2(item) {
    this.nitreceptor = item.nit;
    this.receptor = item.id;
    // do something with selected item
  }
  selectEvent3(item) {
    this.producto = item.descripcion;
    this.precio = item.precio;
    this.id = item.id;
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }

  persons: Persona[] = [];
  item: Item[] = [];
  itemfactura: Itemfactura[] = [];
  
   getpersonas(){
    this.personaService.getAll().subscribe((data: [])=>{
      this.data = data;
      console.log(this.data);
    })
   }

  ngOnInit(): void {
    this.itemService.getAll().subscribe((data: [])=>{
      this.data2 = data;
      console.log(this.data2);
    }) 
  }

}
