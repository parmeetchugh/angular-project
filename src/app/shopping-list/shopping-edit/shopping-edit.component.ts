import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editedItemIndex: number;
  editMode = false;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );

  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const newnIgredientAdded = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredients(this.editedItemIndex, newnIgredientAdded)
    }
    else {
      this.slService.addIngredient(newnIgredientAdded);
    }
    this.editMode = false;
    this.slForm.reset();



  }
  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete(){
    this.onClear();
    this.slService.deleteIngredients(this.editedItemIndex);

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
