import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerPublicidad: OwlOptions = {
    items:1,
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause:true,
    lazyLoad:true
  };
  slidesStore = [
    {
      id:'1',
      src:'assets/images/banners/banner-tarjeta-credito.jpg',
      alt:'tarjeta de crédito',
      title:'Descubre el poder de ganar más mientras compras',
      btnText:'Ver Beneficios',
      url:'https://landing.leal.co/tarjeta-credito-leal'
    },
    {
      id:'2',
      src:'assets/images/banners/banner-desktop-final.jpg',
      alt:'ahorra en tus compras',
      title:'Miles de opciones para ahorrar con actitud',
      subtitle:'Ahorra hasta el 100% de tus compras en supermercados descargando la APP Leal',
      btnText:'Descargar App',
      url:'https://play.google.com/store/apps/details?id=com.kubo.leal&deeplink=itbl://home'
    }
  ]

  constructor() {

  }

  ngOnInit(): void {
  }

}
