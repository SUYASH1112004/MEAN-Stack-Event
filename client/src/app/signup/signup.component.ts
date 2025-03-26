import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { check } from '../checkmodel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  signform!:FormGroup
  private checkobj : check = new check 
  constructor(private formbuilder : FormBuilder,private http:HttpClient,private router: Router){}

  ngOnInit(): void {
      this.signform=this.formbuilder.group({
        name:[''],
        collegeid:[''],
        password:['']
      })
  }

  Signup()
  {
    this.checkobj.name=this.signform.value.name;
    this.checkobj.collegeid=this.signform.value.collegeid;
    this.checkobj.password=this.signform.value.password;
    this.http.post<any>('http://localhost:3000/api/signup',this.checkobj).subscribe(res=>{
      console.log(res)
      alert('signup Successfully');
      this.signform.reset();
      this.router.navigate(['/login']);
    }),(err:any)=>{
      console.log(err);
      alert('signup error');
    }
    
  }
}
