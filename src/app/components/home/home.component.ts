import { Component } from '@angular/core';
import data from 'src/assets/data.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  jobs: any[] = [];
  itemsFilter: any[] = [];
  constructor(){
    this.jobs = data;
    this.jobs.map(a=> {
      if (a.logo){
        const logo = a.logo;
        let newLogo = logo.slice(1);
        newLogo = `../../../assets${newLogo}`
        a.logo = newLogo;
      }
    });
    
  }

  clearFilter(){
    this.itemsFilter = [];
  }

  removeItem(){
    this.itemsFilter = [];
  }

  filter(item: string){
    this.itemsFilter.push(item);
    console.warn(this.itemsFilter);
    
  }
}
