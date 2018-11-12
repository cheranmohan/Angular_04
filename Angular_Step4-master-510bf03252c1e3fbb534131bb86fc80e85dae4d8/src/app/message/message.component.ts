import { Component, OnInit,OnChanges,Input } from '@angular/core';
import { Message } from './message';
import {MessageService} from '../message.service'
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit,OnChanges {
messages ;
userdata : string;
message:string;
receiver:string;
circle:string;
type:string;

@Input() messageObj:object;

  constructor(private messageService:MessageService) { }

ngOnChanges(value){

  console.log('value is',value);
  console.log('object in message',value.messageObj.currentValue.value);
  this.type=value.messageObj.currentValue.type;
  if(value.messageObj.currentValue.type=='user'){
  this.receiver=value.messageObj.currentValue.value;
  this.messageService.getMessageFromUser(value.messageObj.currentValue.value).subscribe(data =>{this.messages=data.json();})
  }
  else{
    this.messageService.getMessageByCircle(value.messageObj.currentValue.value).subscribe(data => {this.messages=data.json();})
  }
}

  ngOnInit() {
  }
 
  

}
