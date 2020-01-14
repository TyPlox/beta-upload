import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-banner-five',
  templateUrl: './collection-banner.component.html',
  styleUrls: ['./collection-banner.component.scss']
})
export class CollectionBannerFiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // collection
  public collection = [{
    image: 'assets/images/banner1.jpg',
    title: 'Mínimo 10% de descuento',
    text: 'New York'
  }, {
    image: 'assets/images/banner2.jpg',
  }, {
    image: 'assets/images/banner.jpg',
    title: 'Mínimo 10% de descuento',
    text: 'Miami'
  }]

}
