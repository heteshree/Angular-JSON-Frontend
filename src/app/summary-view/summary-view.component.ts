import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { DataService } from '../services/data.service'; 

@Component({
  selector: 'app-summary-view',
  standalone: true,
  imports:[ MatTableModule],
  templateUrl: './summary-view.component.html',
  styleUrl: './summary-view.component.css'
})
export class SummaryViewComponent implements OnInit{

    dataList : any[] = [];
    displayedColumns : string[] = ['samplingTime','projectName', 'constructioncount', 'isconstructiondone', 'lengthofroad'];

    constructor(private dataservice : DataService){}

    ngOnInit() {
  this.dataservice.getData().subscribe({
    next : (response) => {
      this.dataList = response.Datas;
    }
  }
  )    

    }
    getPropertyValue(element: any, label: string): any {
      const property = element.Properties.find((prop: any) => prop.Label === label);
      return property ? property.Value : 'Not Available';
    }
  
}
