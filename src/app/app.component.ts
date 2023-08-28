import { Component } from '@angular/core';
import{ User } from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularAssignment';
    users: User[] = [];

    handleUserAdded(user: User){
       this.users.push(user);
    }

}
