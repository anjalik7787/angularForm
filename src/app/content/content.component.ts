import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private content :ServiceService) { }

  ngOnInit(): void {
  }

 flag :boolean =false;

  searchtext ="";
  name = "";
  Id :number = 0 ;

  contentAdd(val1 :any,  val2 :any){
    let bodyy = {name : val1, id : val2};
    if(this.flag)
    this.content.updateUsers(val2,bodyy).subscribe(res=>{ this.reset()})
    else
    this.content.postUsers(bodyy).subscribe(res=>{ this.reset()})
  }


  reset(){
   this. name = "";
    this.Id  = 0 ;
    this.flag = false;

  }
  
  

  search(id: any){

  if(!id) return;

   this.content.searchUsers(id).subscribe(res=>{
     if(res) this.flag = true;
     this.name = res.name;
     this.Id = res.id;
     this.searchtext ="";
   })
   
  }

  DeleteUser(id : any){
    this.content.DeleteUsers(id).subscribe(res=>{
      this.reset();
    })

    
  }
}
