import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { eventdata } from '../eventdata';
import { AuthService } from '../auth.service';
import { check } from '../checkmodel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent implements OnInit{
    signform!: FormGroup
    private obj : check = new check();

    constructor(private auth : AuthService,private formbuilder: FormBuilder,private http : HttpClient,private router : Router)
    {}

    ngOnInit(): void {
        this.signform = this.formbuilder.group({
          name : [''],
          collegeid : [''],
          password : ['']
        });
    }

    Signup()
    {
      this.obj.collegeid=this.signform.value.collegeid;
      this.obj.name=this.signform.value.name;
      this.obj.password=this.signform.value.password;

      this.auth.signupservice(this.obj).subscribe(
        res=>{
          console.log(res);
          alert("Signed Up Successfully .. Please Login Now !!");
          this.signform.reset();
          this.router.navigate(['/login']);
        },
        (err:any)=>{
          console.log(err);
          alert("Error Occured "+ err);
        }
      );
    }


}
