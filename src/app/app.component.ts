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
			console.log("el usuario esta loggeado")
			this.sessionM.current().subscribe({
				next:(result)=>{
					console.log("EL user en app component: ",result);
					if(result instanceof String){
						console.log("no es instancia de user")
					}else{					
						console.log("el usurario es una instancia");
						console.log("El usuario es: ",result)
						this.userM.setUser(result);
						this.userM.setUserLoggedIn(true);
					}
					
				},
				error:(error)=>{
					console.log("El error en app component: ",error);
					localStorage.removeItem('user');
					this.userM.setUserLoggedIn(false);
				}
		
		})
		return;
		}
		this.userM.setUserLoggedIn(false);
		console.log("el usuario no esta logeado")
	}
	

}
