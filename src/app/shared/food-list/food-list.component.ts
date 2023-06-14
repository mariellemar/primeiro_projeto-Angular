import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { FoodList } from 'src/app/modules/food-list';

//services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<FoodList> = [];


  constructor(private foodlistService: FoodListService) { 

   }

  ngOnInit(): void {
    this.foodlistService.foodList().subscribe(
      res => this.foodList = res,
      error => error
    );
    
    this.foodlistService.emitEvent.subscribe(
      res => {
        alert(`Voce adicionou ${res.nome}`);
        return this.foodList.push(res);
      }
    );
  }

  public foodListEdit(value: string, id: number) {
    this.foodlistService.foodListEdit(value, id).subscribe(
      res => {
        return console.log(res);
      },
      error => error
    )
  }

  public foodListDelete(id: number) {
    return this.foodlistService.foodListDelete(id).subscribe(
      res => {
        this.foodList = this.foodList.filter(
          item => {
            return id !== item.id
          }
        )
      },
      error => error
    );
  }


}
