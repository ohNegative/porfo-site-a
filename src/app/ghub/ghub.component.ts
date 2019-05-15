import { Component, OnInit } from '@angular/core';
import { GhubService } from '../services/ghub.service';


@Component({
  selector: 'ghub',
  templateUrl: './ghub.component.html',
  styleUrls: ['./ghub.component.css']
})
export class GhubComponent implements OnInit {
  ghubs: any;
  

  constructor(private service: GhubService) { }

  ngOnInit() {
    this.service.getGhub()
      .subscribe( response => {
        this.ghubs = response;
      });
  }

  createData(ghub) {

    let data = {
      title: ghub.value,
    };

    this.service.createGhub(data)
      .subscribe( response => {
        ghub.value = '';
        this.ghubs.splice(0, 0, data);
      })
  }


}
