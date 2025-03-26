import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detailed-view',
  standalone: true,
  imports: [CommonModule,FormsModule,MatListModule],
  templateUrl: './detailed-view.component.html',
  styleUrl: './detailed-view.component.css'
})
export class DetailedViewComponent implements OnInit {

  dataList : any[] = [];
  selectedItem: any;

  constructor(private dataService : DataService){}

  ngOnInit() {
    this.dataService.getData().subscribe({
      next : (response) =>{
        this.dataList = response.Datas;
      } 
    }
    )
  }

  selectItem(item : any){
    this.selectedItem = {...item} ;

     // Ensure `Properties` array exists
  if (!this.selectedItem.Properties || !Array.isArray(this.selectedItem.Properties)) {
    this.selectedItem.Properties = [];
  }

  // Ensure correct property order by mapping existing values or setting defaults
  const defaultProperties = [
    { Label: "Project Name", Value: "" },
    { Label: "Construction Count", Value: 0 },
    { Label: "Is Construction Completed", Value: false },
    { Label: "Length of the road", Value: 0 }
  ];

  // Normalize `Properties` to maintain a consistent order
  this.selectedItem.Properties = defaultProperties.map((defaultProp) => {
    const existingProp = this.selectedItem.Properties.find((p:any) => p.Label === defaultProp.Label);
    return existingProp ? existingProp : defaultProp;
  });

  console.log('Normalized Selected Item:', this.selectedItem);
  }

  saveChanges(){
    console.log("Updated Data: ", this.selectedItem);

    this.dataList = this.dataList.map(item => (item.SamplingTime === this.selectedItem.SamplingTime ? this.selectedItem : item));

    const updatedData = {
      Id: 1,
      Name: 'New Observation',
      Datas: this.dataList
    };

    this.dataService.saveData(updatedData).subscribe(response => {
      console.log('Data saved successfully', response);
    });

  }
}
