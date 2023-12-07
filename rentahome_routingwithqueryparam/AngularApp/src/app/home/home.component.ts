import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    flag: number = 1;
    houseType: string = '';
    location: string = '';
    contactNumber: string = '';
    searchText: string = '';

  constructor(private router: Router,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {

    // fill the code
    this._Activatedroute.queryParams.subscribe((params: { [x: string]: string | number; }) => {
        this.flag = +params['flag'];
    });

  }

}
