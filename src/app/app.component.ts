import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder){}
  

  ngOnInit(){
   this.form = this.formBuilder.group({
     username: [''],
     password: ['']
   })
  }

  onSubmit(){
    console.log(this.form.controls['username'].value, this.form.controls['password'].value)
  }
 

}


