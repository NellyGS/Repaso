import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CasaPage } from '../casa/casa';
import { FavsPage } from '../favs/favs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  info= CasaPage
  favs= FavsPage
  carrito =[];

  casas = [
    {id:0,
      foto: "../assets/casa1.jpg",
      ciudad: "Zapopan",
      colonia: "Valle Real",
      precio: "$ 14,990,000.00",
      mterr: "128 m²",
      mcont: "0 m²", 
      baos: "3.5",
      recama: "3",
    },
    {id:1,
      foto: "../assets/casa2.jpg",
      ciudad: "Zapopan",
      colonia: "Puerta de hierro",
      precio: "$ 14,490,000.00",
      mterr: "466 m²",
      mcont: "400 m²", 
      baos: "4",
      recama: "4",
    },
    {id :2, 
      foto: "../assets/casa3.jpg",
      ciudad: "Zapopan",
      colonia: "Parque Regency",
      precio: "Se arregla con el vendedor",
      mterr: "350 m²",
      mcont: "0 m²", 
      baos: "0",
      recama: "0",
    },
    {id :3, 
      foto: "../assets/casa4.jpg",
      ciudad: "Zapopan",
      colonia: "Villas De La Primavera",
      precio: "Se arregla con el vendedor",
      mterr: " 3386 m²",
      mcont: "513 m²", 
      baos: "2.5",
      recama: "3",
    },
    {id :4, 
      foto: "../assets/casa5.jpg",
      ciudad: "Zapopan",
      colonia: "Atlas Colomos",
      precio: "Se arregla con el vendedor",
      mterr: "250 m²",
      mcont: "0 m²", 
      baos: "0",
      recama: "0",
    },
    {id :5, 
      foto: "../assets/casa6.jpeg",
      ciudad: "Tlajomulco",
      colonia: "Bosques de Santa Anita",
      precio: "$ 3,300,000.00",
      mterr: "225 m²",
      mcont: "235 m²", 
      baos: "3",
      recama: "4",
    },
    {id :6, 
      foto: "../assets/casa7.jpg",
      ciudad: "Zapopan",
      colonia: "Bugambilias",
      precio: "$ 7,000,000.00",
      mterr: "426 m²",
      mcont: "290 m²", 
      baos: "5",
      recama: "5",
    },
    {id :7, 
      foto: "../assets/casa8.jpg",
      ciudad: "Zapopan",
      colonia: "Valle Real",
      precio: "$ 23,000,000.00",
      mterr: "825 m²",
      mcont: "750 m²", 
      baos: "5",
      recama: "4",
    },
    {id :8, 
      foto: "../assets/casa9.jpg",
      ciudad: "Tlajomulco",
      colonia: "Casa Fuerte",
      precio: "Se arregla con el vendedor",
      mterr: "0 m² ",
      mcont: "0 m²", 
      baos: "0",
      recama: "0",
    },
    {id :9, 
      foto: "../assets/casa10.jpg",
      ciudad: "Zapopan",
      colonia: "puerta de Hierro",
      precio: "$ 18,000,000.00",
      mterr: "607 m²",
      mcont: "590 m²", 
      baos: "6",
      recama: "4",
    },

  ];

  constructor(public navCtrl: NavController) {
  }

  clickinfo (c){
    this.navCtrl.push(this.info, {casa:c,carrito: this.carrito})
  }
  
  clickFavs (){
    this.navCtrl.push (this.favs, {carrito: this.carrito})
  }

}
