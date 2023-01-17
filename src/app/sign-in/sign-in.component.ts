import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  signinForm : FormGroup ;
  pwd :  RegExp = /^[a-z\d\-_]+$/i
 
  constructor(private formBuilder : FormBuilder){

  }
  ngOnInit(): void {
    this.initForm()
  }

  initForm (){
    this.signinForm = this.formBuilder.group ({
      username : ['',[Validators.required,Validators.maxLength(10)]],
      password : ['',[Validators.required,Validators.maxLength(8),Validators.pattern(this.pwd)]]
    })
  }
  
  onSubmit = () =>{
    if(this.signinForm.invalid){
      this.setFormValidationErrors()
    }
  }

  get username (){
    return this.signinForm.get('username')
  }

  get password (){
    return this.signinForm.get('password')
  }


  setFormValidationErrors() {
    Object.keys(this.signinForm.controls).forEach(key => {
      this.signinForm.get(key).markAsTouched({ onlySelf: true });
    });
  }
}
