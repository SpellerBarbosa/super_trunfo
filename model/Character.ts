type Attributes = {
  poder: number,
  sabedoria: number,
  influencia: number,
  caos: number,
  cura: number,
  imortalidade:number
};

export default class Character{
  name: string;
  picture: string;
  attributes: Attributes;

  constructor(name: string, picture: string, attributes: Attributes){
    this.name = name;
    this.picture = picture;
    this.attributes = attributes;
  }

  getAttributes(attr: keyof Attributes): number {
    return this.attributes[attr];
  }
}