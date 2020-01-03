import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RajpackCarouselComponent } from './rajpack-carousel/rajpack-carousel.component';
import { RajpackNavbarComponent } from './rajpack-navbar/rajpack-navbar.component';
import { FloatIconsComponent } from './float-icons/float-icons.component';
import { RajpackAboutComponent } from './rajpack-about/rajpack-about.component';
import { FormModalComponent } from './modal/form-modal/form-modal.component';
import { ContentModalComponent } from './modal/content-modal/content-modal.component';
import { ImageModalComponent } from './modal/image-modal/image-modal.component';
import { RajpackMachineriesComponent } from './rajpack-machineries/rajpack-machineries.component';
import { RajpackModalComponent } from './modal/rajpack-modal/rajpack-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    RajpackCarouselComponent,
    RajpackNavbarComponent,
    FloatIconsComponent,
    RajpackAboutComponent,
    FormModalComponent,
    ContentModalComponent,
    ImageModalComponent,
    RajpackMachineriesComponent,
    RajpackModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
