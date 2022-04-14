import { Component, Input, OnInit  } from '@angular/core';
import { Text } from '../text.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  textList!: Text;
  @Input()
  indexList!: number;


  constructor() { }

  ngOnInit(): void {
  }
}
