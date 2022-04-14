import { Text } from "./text.model";

export class DatosServicio {

  texts:Text[]=[

    new Text("Sample text","txet elpmaS"),

  ];

  addLibroServicio(myText:Text){

    this.texts.push(myText);

  }

}
