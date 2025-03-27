import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { DataService } from '../services/data.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary-view',
  standalone: true,
  imports:[ MatTableModule,CommonModule],
  templateUrl: './summary-view.component.html',
  styleUrl: './summary-view.component.css'
})
export class SummaryViewComponent implements OnInit{

    dataList : any[] = [];
    displayedColumns : string[] = ['samplingTime','projectName', 'constructioncount', 'isconstructiondone', 'lengthofroad'];

    constructor(private dataservice : DataService, private cd : ChangeDetectorRef){}

    ngOnInit() {
      
  this.dataservice.getData().subscribe({
    
    next : (response) => {
      console.log("API Raw Response:", response); // Log full response
      if (response){
        console.log("Datas Array in Response:", response.Datas); // Check 'Datas'
        this.dataList = response?.Datas || []; 
       
      }else {
        this.dataList = [];
      }
     
      console.log("Updated dataList in Component:", this.dataList);
      
    },
    error: (error) => console.error("API Error:", error)
  }
  )    

    }


    getPropertyValue(element: any, label: string): any {
      const value = element?.Properties?.find((prop: any) => prop.Label === label)?.Value;
      return value === undefined || value === null || value === '' ? 'Not Available' : value;
    }
    

    
    
  
}
