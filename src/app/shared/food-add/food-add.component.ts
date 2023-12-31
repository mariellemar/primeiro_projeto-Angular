import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  constructor(private foodlistService: FoodListService) { 

   }

  ngOnInit(): void {
  }

  public listAddItem(value: string) {
    return this.foodlistService.foodListAdd(value).subscribe(
      res => this.foodlistService.foodListAlert(res),
      error => error
    );
  }

}
