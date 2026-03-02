interface Chai{
    name:string,
    price:number,
    isHot:boolean
}

const chai : Chai = {
    name:"Masala Chai",
    price:25,
    isHot:true
}


interface User {
  readonly id: number;
  name: string;
  email: string;
  isActive?: boolean;  // optional
}

const user: User = {
  id: 1,
  name: "John",
  email: "[EMAIL_ADDRESS]"
};


