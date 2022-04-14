import{DatosServicio} from './../dates.services';
import { Component, OnInit } from '@angular/core';
import { Text } from '../text.model';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})

export class TextComponent implements OnInit {

  DatosServicio: any;
  constructor(private textServicio: DatosServicio) { }

  texts:Text[]=[];

  text: string ="";
  result:string="";


  invertText(){
    this.result="";
    this.result =this.text.split("").reverse().join("");
    console.log(this.result);
    return this.result;
  }

  saveText(): void{
    let myText=new Text(this.text, this.result);
    this.textServicio.addLibroServicio(myText);
    this.text="";
    this.result="";
  }

  ngOnInit(): void {
    this.texts=this.textServicio.texts;
  }
  
}