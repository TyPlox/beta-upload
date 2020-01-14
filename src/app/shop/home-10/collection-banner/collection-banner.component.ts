import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-banner-ten',
  templateUrl: './collection-banner.component.html',
  styleUrls: ['./collection-banner.component.scss']
})
export class CollectionBannerTenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Collection banner
  public categoryOne = [{
    image: 'assets/images/pets/banner/1.jpg',
    title: 'América',
    link: '/home/left-sidebar/collection/pets'
  }, 
  {
    image: 'assets/images/pets/banner/2.jpg',
    title: 'Europa',
    link: '/home/left-sidebar/collection/pets'
  },
  {
    image: 'assets/images/pets/banner/3.jpg',
    title: 'África',
    link: '/home/left-sidebar/collection/pets'
  }]

  public categoryTwo = [{
    image: 'assets/images/pets/banner/4.jpg',
    title: 'Asia',
    link: '/home/left-sidebar/collection/pets'
  },
  {
    image: 'assets/images/pets/banner/5.jpg',
    title: 'Oceanía',
    link: '/home/left-sidebar/collection/pets'
  },
  {
    image: 'assets/images/pets/banner/6.jpg',
    title: 'El Mar Meditarráneo',
    link: '/home/left-sidebar/collection/pets'
  }]

  

}
