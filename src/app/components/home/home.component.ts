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
  constructor() {
    this.jobs = data;
    this.jobs.map(a => {
      if (a.logo) {
        const logo = a.logo;
        let newLogo = logo.slice(1);
        newLogo = `../../../assets${newLogo}`
        a.logo = newLogo;
      }
    });
    this.jobs.find(j => {
      j.languages.push(j.role, j.level);
      if (j.tools.length > 0) {
        j.tools.map((a: any) => {
          j.languages.push(a)
        })
      }

    });
  }

  clearFilter() {
    this.itemsFilter = [];
    this.jobs = data;
  }

  removeItem(item: string) {
    const newArray = [];
    for (let i = 0; i < this.itemsFilter.length; i++) {
      if (this.itemsFilter[i] !== item) {
        newArray.push(this.itemsFilter[i]);
      }
    }
    this.itemsFilter = newArray;
   if (this.itemsFilter.length> 0){
    this.itemsFilter.map(i =>{
      this.jobs = data;
      let filtered = this.jobs.filter(a => a.languages.includes(i));
      this.jobs = filtered;
    })
   } else{
     this.jobs = data;
   }
  }

  filter(item: string) {
    if (!this.itemsFilter.includes(item)){
      this.itemsFilter.push(item);
    }
    let filtered = this.jobs.filter(a => a.languages.includes(item));
    this.jobs = filtered;

  }

}
