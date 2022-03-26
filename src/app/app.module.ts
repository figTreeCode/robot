import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockselectorComponent } from './blockselector/blockselector.component';
import { NavMenuComponent} from './nav-menu/nav-menu.component';
import { BlockSelectorService } from './block-selector.service';

@NgModule({
  declarations: [
    AppComponent,
    BlockselectorComponent,
    NavMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BlockSelectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
