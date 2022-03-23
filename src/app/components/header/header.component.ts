import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/common/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  miPortfolio:any;
  constructor(private datosPortfolilio: PortfolioService) {
    
   }

  ngOnInit(): void {
    this.datosPortfolilio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio=data;
    });
  }

}
