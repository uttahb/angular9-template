import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { LayoutRoutingModule } from "./layout-routing.module";

@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [CommonModule, LayoutRoutingModule]
})
export class LayoutModule {}
