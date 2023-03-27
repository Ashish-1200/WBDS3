export interface incident {

    _id:string;
    department:string;
    firstName: string;
    lastName:string;
    gender: string;
    age:number;
    address:string;
    dateOfIncident:string;
    location: string;
    description:string;
    dateuploaded: string;
    commentbox:string;
    
  IncidentPicture?:string;
  productImage:[];

version: number;
lastEditedBy?: string;

  }
  