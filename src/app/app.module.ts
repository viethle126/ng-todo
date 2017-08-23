import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'
import { EffectsModule } from '@ngrx/effects'
import { TodoEffects } from './core/effects'
import { StoreModule } from '@ngrx/store'
import { reducers } from './core/reducers'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TodoComponent } from './todo/todo.component'
import { TodoListComponent } from './todo-list/todo-list.component'
import { TodoSearchComponent } from './todo-search/todo-search.component'
import { TodoService } from './core/services/todo.service'
import { TodoAddComponent } from './todo-add/todo-add.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodoSearchComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TodoEffects]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
