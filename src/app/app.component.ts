import { OnInit } from '@angular/core'
// Angular Imports
import { Component } from '@angular/core'
import { SessionManagerService } from './domain/managers/session-manager.service';
import { UserManagerService } from './domain/managers/user-manager.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
	title = 'angular-template'

	constructor(
		private sessionM:SessionManagerService,
		private userM: UserManagerService
	){}

	ngOnInit(): void {
		const user = localStorage.getItem('user');
		if(user){
			this.sessionM.current().subscribe({
				next:(result)=>{
					if(result instanceof String){
					}else{					
						this.userM.setUser(result);
						this.userM.setUserLoggedIn(true);
					}
					
				},
				error:(error)=>{
					localStorage.removeItem('user');
					this.userM.setUserLoggedIn(false);
				}
		
		})
		return;
		}
		this.userM.setUserLoggedIn(false);
	}
	

}
