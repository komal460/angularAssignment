import { Component, Output, EventEmitter } from '@angular/core';
import{ User } from '../model';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
@Output() handleSave = new EventEmitter<User>();
user: User = {
  name: '',
  email: '',
  address: ''
}

onSave(){
  this.handleSave.emit(this.user);
}
}
