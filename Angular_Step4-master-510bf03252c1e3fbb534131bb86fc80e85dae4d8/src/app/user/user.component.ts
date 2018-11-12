import { Component, OnInit ,Output, EventEmitter } from '@angular/core';
import {User} from './user';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users : User[];
 @Output() selectedUser=new EventEmitter<any>();
 
  constructor(private userService : UsersService) { }

  selectUser(UserData:string){
  const currentUserValue={
  type:'user',
  value:'userdata'
   }
   this.selectedUser.emit(currentUserValue);
  }

  getUsers(){
    this.userService.getUsers().subscribe(data => {this.users=data.json();});
  }

  ngOnInit() {
  this.getUsers();
  }

}
