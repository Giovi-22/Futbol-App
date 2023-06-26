// Angular Imports
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/Pages/Home/home.component'

const routes: Routes = [
	{
		path: '',
		component:HomeComponent,
	},
	{
		path: '**',
		redirectTo:'',
		pathMatch:'full'
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
