import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup, FormControl, Validators, FormBuilder } 
    from '@angular/forms';

@Component({
  selector: 'app-ang-form',
  templateUrl: './ang-form.component.html',
  styleUrls: ['./ang-form.component.css']
})
export class AngFormComponent implements OnInit {

  constructor(private angForm :ServiceService) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    "id": new FormControl("", Validators.required),
    "name": new FormControl("", Validators.required),
});


form2 = new FormGroup({
  "firstName": new FormControl("", Validators.required),
  "password": new FormControl("", Validators.required),
});



  flag :boolean =false;

  searchtext ="";
  name = "";
  Id :number = 0 ;
  bodyy = this.form;


  contentAdd(bodyy : any){
    // let bodyy = this.form;
    if(this.flag)
    this.angForm.updateUsers(bodyy.controls.id,bodyy).subscribe(res=>{ this.reset(); })
    else
    this.angForm.postUsers(bodyy).subscribe(res=>{ this.reset();  alert ("saved");})
  }


  submitMe(){
    console.log(this.form2);
  }

  reset(){
   this.form.reset();
     this.flag = false;

  }
  
  

  search(id: any){

  if(!id) return;

   this.angForm.searchUsers(id).subscribe(res=>{
     if(res) this.flag = true;
    //  this.firstname = res.name;
     this.Id = res.id;
     this.searchtext ="";
   })
   
  }

  DeleteUser(id : any){
    this.angForm.DeleteUsers(id).subscribe(res=>{
      this.reset();
    })

    
  }
}
