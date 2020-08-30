import { Component, OnInit } from '@angular/core';
import {CdkDragDrop,moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private timer: Observable<any>;
  public validateError: boolean = false;      



  title:string="";
  desc:string="";
  select_user:string="Amr";
  model:any;

  columns_name:string='Todo';

  showing_details:any;
  



  data = [
    [{id:1,title:"check endpoints",desc:"data should be reviewed",select_user:"Amr",date:{year:2020,month:8,day:27}},{id:2,title:"review code",desc:"server is not working properly",select_user:"Amr",date:{year:2020,month:8,day:29}}],
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
    this.data.push([]);
    console.log(this.columns)
  }

  AddNewTask(){
    console.log("clicked",this.model)
    console.log(this.data)
    var len =  this.data.length 
    if(this.title === ""){
      this.setTimer();
    }else{
      if(this.desc === ""){
        this.setTimer();
      }else{
        this.data[len-1].push({id:0,title:this.title,desc:this.desc,select_user:this.select_user,date:this.model});
      }
    }
    
    
  }

  showDetails(item){
    console.log(item);
    this.showing_details = item;
  }

   setTimer(){
    this.validateError = true;
    setTimeout(()=>{
      this.validateError = false
      console.log("in time")
    },3000)
    
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
