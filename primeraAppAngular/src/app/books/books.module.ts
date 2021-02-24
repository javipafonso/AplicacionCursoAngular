import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { MocksComponent } from './mocks/mocks.component';
import { FormsModule } from '@angular/forms';
import { SearchGoogleApiComponent } from './search-google-api/search-google-api.component';
import { ByServiceComponent } from './by-service/by-service.component';
import { ByApiRestComponent } from './by-api-rest/by-api-rest.component';


@NgModule({
  declarations: [BooksComponent, MocksComponent, SearchGoogleApiComponent, ByServiceComponent, ByApiRestComponent],
  imports: [
    CommonModule,
    FormsModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
