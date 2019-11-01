import { Component, OnInit } from '@angular/core';
import { MatesService } from '../mates.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private _matesService: MatesService) { }

  public matesdatails=[];
  // public SearchDetails:String;
  // NS:String;

  ngOnInit() {
    //this.matesdatails=this._matesService.getMates();
    
    this._matesService.getMembers()
    .subscribe(info => this.matesdatails=info)

  }

}
