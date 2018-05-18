import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {
  
  constructor(private router: Router) { 
        this.router.events.subscribe((val) =>{
            console.log("router value",val);
        });
    }

  ngOnInit() {
  }

}
