import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-banner-nine',
  templateUrl: './collection-banner.component.html',
  styleUrls: ['./collection-banner.component.scss']
})
export class CollectionBannerNineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Collection banner
  public category = [{
    image: 'assets/images/electronics/5.jpg',
    save: '10% descuento',
    title: 'Rusia',
    link: '/home/left-sidebar/collection/electronics'
  }, {
    image: 'assets/images/electronics/6.jpg',
    save: '10% descuento',
    title: 'Finlandia',
    link: '/home/left-sidebar/collection/electronics'
  },
  {
    image: 'assets/images/electronics/7.jpg',
    save: '10% descuento',
    title: 'Noruega',
    link: '/home/left-sidebar/collection/electronics'
  }]

}
