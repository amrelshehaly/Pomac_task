import { Component, OnInit } from '@angular/core';
import {CdkDragDrop,moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title:string;
  desc:string;
  select_user:string;
  model:any;

  columns_name:string='Todo';


  data = [
    [{id:1,name:'name1'},{id:2,name:'name2'}],
    [{id:3,name:'name3'},{id:4,name:'name4'}],
    [{id:5,name:'name5'},{id:6,name:'name6'}]
  ];

  columns =[{id:0,name:this.columns_name}]

  // todo = [
  //   'Get to work',
  //   'Pick up groceries',
  //   'Go home',
  //   'Fall asleep'
  // ];

  // done = [
  //   'Get up',
  //   'Brush teeth',
  //   'Take a shower',
  //   'Check e-mail',
  //   'Walk dog'
  // ];

  // data =[{id:1,name:'name1'},{id:2,name:'name2'},{id:3,name:'name3'},{id:4,name:'name4'},{id:5,name:'name5'},{id:6,name:'name6'}];

  constructor() { }


  AddNewColumn(){
    var len = this.columns.length
    var a = this.columns[len-1];
    this.columns.push({id: a.id+1 , name:this.columns_name})
    console.log(this.columns)
  }

  AddNewTask(){
    console.log("clicked")
    console.log(this.data)
    var len =  this.data.length 
    this.data[len-1].push({id: 7 , name:"amr"});
    
  }

  drop(event: CdkDragDrop<string[]>) {
    // console.log("before if", event.container ,"previous contaoier",event.previousContainer);
    if (event.previousContainer === event.container) {
      // console.log(event);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  ngOnInit(): void {
  }

}
