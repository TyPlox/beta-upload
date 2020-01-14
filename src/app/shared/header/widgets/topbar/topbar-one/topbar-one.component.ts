import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../classes/product';
import { WishlistService } from '../../../../services/wishlist.service';
import { ProductsService } from '../../../../../shared/services/products.service';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/app/services/service.index';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar-one.component.html',
  styleUrls: ['./topbar-one.component.scss']
})
export class TopbarOneComponent implements OnInit {
  constructor(public productsService: ProductsService,
    public _userService: UserService) { }

  ngOnInit() { }
  TokenID() {
    const token = localStorage.getItem("token");
    return token && token.length > 5;
  }
}
