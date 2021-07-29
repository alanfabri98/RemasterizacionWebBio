import { Component, OnInit } from '@angular/core';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-articulo-main',
  templateUrl: './articulo-main.component.html',
  styleUrls: ['./articulo-main.component.css']
})
export class ArticuloMainComponent implements OnInit {

  faListAlt = faListAlt;
  
  constructor() { }

  ngOnInit(): void {
  }

}
