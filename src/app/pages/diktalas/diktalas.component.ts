import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../shared/models/Comment';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DiktalasService } from '../../shared/services/diktalas.service';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-diktalas',
  templateUrl: './diktalas.component.html',
  styleUrl: './diktalas.component.scss'
})
export class DiktalasComponent implements OnInit{

  @Input() diktalasInput: any;
  user?: User;

  // diktalasObject: any = {};
  diktalasok: Array<Comment> = [];

  diktalasForm = this.createForm({
    id: '',
    name: '',
    using_place: '',
    oraallas: '',
    date: 0
  })

  constructor(private fb: FormBuilder, private router: Router, private diktalasService: DiktalasService, private userService: UserService){
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
  
  }
  createForm(model: Comment){
    let formGroup = this.fb.group(model);
    formGroup.get('name')?.addValidators([Validators.required]);
    formGroup.get('using_place')?.addValidators([Validators.required]);
    formGroup.get('oraallas')?.addValidators([Validators.required]);
    return formGroup;
  }

  addOraallas(){
    if(this.diktalasForm.valid){
      if(this.diktalasForm.get('name') && this.diktalasForm.get('using_place') && this.diktalasForm.get('oraallas')){
        this.diktalasForm.get('date')?.setValue(new Date().getTime());

        //this.diktalasok.push({...this.diktalasForm.value});
        
        
        this.router.navigateByUrl('/diktalas/sikeres/' + this.diktalasForm.get('name')?.value);
      }
  }
  }
}
