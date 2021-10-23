import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ConvertSpacesPipe } from './convert-spaces.pipe';
import { StarComponent } from './star/star.component';
import { WelcomeComponent } from './home/welcome.component'
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ConvertSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'product', component: ProductComponent},
      {path: 'product/:id', component: ProductDetailComponent},
      { path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo:'welcome', pathMatch:'full'},
      {path:"**",redirectTo:"welcome",pathMatch:"full"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
