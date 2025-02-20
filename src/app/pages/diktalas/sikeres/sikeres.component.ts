import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sikeres',
  templateUrl: './sikeres.component.html',
  styleUrl: './sikeres.component.scss'
})
export class SikeresComponent implements OnInit{

  userId: string = '';

  constructor(private actRoute: ActivatedRoute){
  }

  ngOnInit(): void {
    this.actRoute.params.subscribe((param: any) =>{
      this.userId = param.userId as string;
    })
  }

}
