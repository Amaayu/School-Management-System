import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  users:any[]=[];
  displayedColumns: string[] = ['name', 'username', 'email', 'phone'];
  dataSource: MatTableDataSource<any>=new MatTableDataSource<any>();

  constructor(private api:ApiService, private router:Router){
  this.getData()
  
  }
  getData(): void{
    this.api.getPostData().subscribe(
     (data)=>{
       this.users=data;
       this.dataSource=new MatTableDataSource<any>(this.users);
     })
      //console.log(data)
    }
    navigateToHome(){
      this.router.navigate(['student-form']);
    }
  }
