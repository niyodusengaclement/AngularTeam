import { Component, OnInit,Pipe } from '@angular/core';
import { MatesService} from '../mates.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

@Pipe({
  name:'orderBy',
  pure:false
})

export class ListComponent implements OnInit {

 
  constructor(private _matesService: MatesService ) { }

  public jobmates=[];
  public users=[];
  NameSearch:String;
  // NAmes:String;


  
  search(){
    if(this.NameSearch!=""){

    }else if(this.NameSearch==""){
      this.ngOnInit();
    }
    this.jobmates=this.jobmates.filter(res=>{
      return res.name.toLocaleLowerCase().match(this.NameSearch.toLocaleLowerCase());
    });
  }
 
  ngOnInit() {
    //this.jobmates=this._matesService.getMates();
    this._matesService.getMembers()
    .subscribe(data =>this.jobmates = data );

    this._matesService.getUsers()
    .subscribe(user =>this.users= user);       
  }  

  deleteData(data){
    console.log(data.value+'deleted');
  }
  orderBy(prop: string) {
    return this.jobmates.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }


}
