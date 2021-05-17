import { Component, OnInit } from '@angular/core';
import { ProductsService } from './service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  products: any[]= [];

  constructor( public pdtSer : ProductsService) { }

  ngOnInit(): void
  {

    this.pdtSer.getProductsList().subscribe((data:any[])=>{

      console.log(data);
      this.products = data;

    }, (error:any)=>{

      console.log(error);

    }, ()=>{

      console.log("Cmpleted");
    });
  }
}
