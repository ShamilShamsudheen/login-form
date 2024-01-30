import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login-form';
  // public email!:string;
  // public password!:string;
  // public username!:string ;
  loginForm = new FormGroup({
    email:new FormControl('user@mail.com', [Validators.required]),
    password:new FormControl('0123456789',[Validators.required,Validators.minLength(10)])
  })

  //reactive form
  
  
  onSubmit(){
    this.loginForm.get('email')?.valueChanges.subscribe(data => console.log(data))
    
    console.log(this.loginForm.value)
  }

  // template form

  // onSubmit(arg:NgForm):void{
  //   this.email= arg.form.value.email;
  //   this.password = arg.form.value.password
  //   console.log("form submitted successfully!",this.email,this.password);
    
  // }
  // onUserName(username:string):void{
  //   this.username="shamil";
  //   (username === this.username)? console.log("correct username"):console.log("in-correct username")
  // }
}
