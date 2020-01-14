import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-collection-slider',
  templateUrl: './collection-slider.component.html',
  styleUrls: ['./collection-slider.component.scss']
})
export class CollectionSliderComponent implements OnInit {

 // DomSanitizer for safe html content.
  constructor(private _sanitizer:DomSanitizer) { }

  ngOnInit() {
  }

   // services
  public categories = [{
    image: 'assets/images/watch/13.png',
    title: 'Tour 1',
    text:  this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">Europa</a></li><li><a href="#">Tour del amor</a></li><li><a href="#">Todo Incluido</a></li><li><a href="#">Ver todo</a></li>'),
  }, {
    image: 'assets/images/watch/14.png',
    title: 'Tour 2',
    text:  this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">Europa</a></li><li><a href="#">Tour del amor</a></li><li><a href="#">Todo Incluido</a></li><li><a href="#">Ver todo</a></li>'),
  }, {
    image: 'assets/images/watch/15.png',
    title: 'Tour 3',
    text:  this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">Europa</a></li><li><a href="#">Tour del amor</a></li><li><a href="#">Todo Incluido</a></li><li><a href="#">Ver todo</a></li>'),
  }, {
    image: 'assets/images/watch/16.png',
    title: 'Tour 4',
    text:  this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">Europa</a></li><li><a href="#">Tour del amor</a></li><li><a href="#">Todo Incluido</a></li><li><a href="#">Ver todo</a></li>'),
  }, {
    image: 'assets/images/watch/13.png',
    title: 'Tour 5',
    text:  this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">Europa</a></li><li><a href="#">Tour del amor</a></li><li><a href="#">Todo Incluido</a></li><li><a href="#">Ver todo</a></li>'),
  }]

   // Slick slider config
  public catSlideConfig = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 586,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

}
