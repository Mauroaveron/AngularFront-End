import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/common/portfolio.service';

@Component({
  selector: 'app-expedu',
  templateUrl: './expedu.component.html',
  styleUrls: ['./expedu.component.css']
})
export class ExpeduComponent implements OnInit {
  experienceList:any;
  educationList:any;
  constructor(private datosPortfolilio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolilio.obtenerDatos().subscribe(data => {
      this.experienceList=data.experience;
      this.educationList=data.education;
    })
  }

}
