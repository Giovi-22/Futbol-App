// Angular Imports
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/Pages/Home/home.component'
import { CompetitionsComponent } from './components/Pages/Competitions/competitions.component'
import { SignInComponent } from './components/sign-in/sign-in.component'
import { TeamComponent } from './components/Pages/Team/team/team.component'
import { ErrorPageComponent } from './components/Pages/error-page/error-page.component'
import { MatchesComponent } from './components/Pages/matches/matches.component'
import { SignUpComponent } from './components/sign-up/sign-up.component'

const routes: Routes = [
	{
		path: 'team',
		component:TeamComponent,
	},
	{
		path: 'competitions',
		component:CompetitionsComponent,
	},
	{
		path:'matches',
		component:MatchesComponent
	},
	{
		path:'about-us',
		component: ErrorPageComponent
	}, 
	{
		path: 'sign-in',
		component: SignInComponent
	},
	{
		path: 'sign-up',
		component: SignUpComponent
	},
	{
		path:'notfound',
		component: ErrorPageComponent
	},
	{
		path: '',
		component:HomeComponent,
	},
	{
		path: '**',
		redirectTo:'/',
		pathMatch:'full'
	},
]


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
