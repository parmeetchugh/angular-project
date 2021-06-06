import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { CalorieCounterComponent } from './calorie-counter/calorie-counter.component';
import { DailyCalorieCounterComponent } from './calorie-counter/daily-calorie-counter/daily-calorie-counter.component';
import { FoodCalorieCounterComponent } from './calorie-counter/food-calorie-counter/food-calorie-counter.component';
import { RecipesResolverService } from './recipes/recipes-resolver.service';

const appRoutes: Routes = [
    {
        path: '', redirectTo: '/calorieCounter', pathMatch: 'full'
    },
    {
        path: 'dailyCalorie', component: DailyCalorieCounterComponent
    }, {
        path: 'foodCalorie', component: FoodCalorieCounterComponent
    },
    {
        path: 'recipes', component: RecipesComponent, children: [
            {
                path: '', component: RecipeStartComponent
            }, {
                path: 'new', component: RecipeEditComponent
            },
            {
                path: ':id', component: RecipeDetailComponent
            }, {
                path: ':id/edit', component: RecipeEditComponent
            }
        ]
    },
    {
        path: 'shopping-list', component: ShoppingListComponent
    },
    {
        path: 'calorieCounter', component: CalorieCounterComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule {

}