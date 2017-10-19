import { Injectable } from '@angular/core';
 @Injectable()
 export class NoteService{
 	  items=[
  		{id:1,description:'AA'},
  		{id:2,description:'BB'}
  	   ];
  	   public GetNotes(){
  	     return this.items;
  	   }
 }