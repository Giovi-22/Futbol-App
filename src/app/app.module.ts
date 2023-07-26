// Angular Imports
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { environment } from '@environment'
import { ReactiveFormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr'
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from '@store/app.state' 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// This Module Imports
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/Header/header/header.component'
import { FooterComponent } from './components/Footer/footer/footer.component'
import { MainComponent } from './components/Main/main/main.component';

import StrategyFactory from './domain/factory/team/strategyFactory'


@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		HeaderComponent,
		MainComponent,
		FooterComponent,
		ReactiveFormsModule,
		StoreModule.forRoot(ROOT_REDUCERS),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		BrowserAnimationsModule,
		ToastrModule.forRoot(),

		
	],
	providers: [StrategyFactory],
	bootstrap: [AppComponent],
})
export class AppModule {}
