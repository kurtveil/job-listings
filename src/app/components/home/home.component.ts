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
  intersection: any;
  languagesFiltered: any;
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


    // console.warn(this.jobs); 
  }

  clearFilter() {
    this.itemsFilter = [];
  }

  removeItem() {
    this.itemsFilter = [];
  }

  filter(item: string) {
    this.itemsFilter.push(item);
    // console.warn(this.itemsFilter);
  //  console.warn(this.filterForLanguage());
   

  }

  filterForLanguage(){
    if (this.itemsFilter.length > 0) {
      this.jobs.find((a) => {
         this.itemsFilter.filter((x: any) => {
          if (a.languages.includes(x)){
           
                       
          }
        })
      });
    }
    console.warn(this.languagesFiltered);
    
  }
}
