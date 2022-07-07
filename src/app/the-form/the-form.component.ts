import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-the-form',
  templateUrl: './the-form.component.html',
  styleUrls: ['./the-form.component.scss']
})
export class TheFormComponent implements OnInit {
  public form!: FormGroup;
  public isInvalid = false;
  
  constructor(
    private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  
  }
  
  public createForm() {
    this.form = this._formBuilder.group({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'emailAddress': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required),
  });
  }
  public saveForm() {
    if(this.form.valid){
      console.log("Form submitted!");
      this.form.reset();
      this.isInvalid = false;
    } else {
      console.log("Invalid form!");
      this.isInvalid = true;
      if (this.form.controls['emailAddress'].invalid){
        this.form.controls['emailAddress'].setValue("email@example/com");
      }
    }
  }
}
