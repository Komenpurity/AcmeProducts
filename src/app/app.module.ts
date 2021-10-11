import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ConvertSpacesPipe } from './convert-spaces.pipe';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ConvertSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
