import { Component, OnInit } from '@angular/core';
import {CdkDragDrop,moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public validateError: boolean = false;      



  title:string="";
  desc:string="";
  select_user:string="Amr";
  model:any;

  columns_name:string='Todo';

  showing_details:any;
  


// here just creating data initially just to clarify were are the tasks and the column
  data = [
    [{id:1,title:"check endpoints",desc:"data should be reviewed",select_user:"Amr",date:{year:2020,month:8,day:27}},{id:2,title:"review code",desc:"server is not working properly",select_user:"Amr",date:{year:2020,month:8,day:29}}],
  ];

  columns =[{id:0,name:this.columns_name}]


  constructor() { }


  AddNewColumn(){ // here we add a new column when making new column we add a new empty array to get the new issues created
    var len = this.columns.length
    var a = this.columns[len-1];
    this.columns.push({id: a.id+1 , name:this.columns_name})
    this.data.push([]);
    console.log(this.columns)
  }

  AddNewTask(){ // creating a new task with well validated for title and description
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

  showDetails(item){ // this is just to enable or disable the Danger alert in the html
    console.log(item);
    this.showing_details = item;
  }

   setTimer(){ // setting a timer for the danger alert to appear and after 3 sec disappear
    this.validateError = true;
    setTimeout(()=>{
      this.validateError = false
      console.log("in time")
    },3000)
    
  }

  drop(event: CdkDragDrop<string[]>) { // the process is to enable the obejcts to be darg and droped, according to the positions they are intially and they just switch postions
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
