// Angular Imports
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { environment } from '@environment'
// This Module Imports
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/Header/header/header.component'
import { FooterComponent } from './components/Footer/footer/footer.component'
import { MainComponent } from './components/Main/main/main.component'

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		HeaderComponent,
		MainComponent,
		FooterComponent
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
