// this code is not readable so we can use interface

// function makeChai(order: { type: string; sugar: number; milk: number }) {
//     console.log(order);

// }
// function serverChai(order: { type: string; sugar: number; milk: number }) {
//     console.log(order);

// }

type Chaiorder = {
    type:string,
    sugar:number,
    milk:number
}

function makeChai(order:Chaiorder):void{
    console.log(order);
    
}

function serverChai(order:Chaiorder):void{
    console.log(order);
    
}


type TeaRecipie ={
    water:number,
    milk:number,

}

class MasalaChai implements TeaRecipie{
    water= 100;
    milk = 25;
}

// type Cupsize = "small" | "medium" | "large" ---- we can not use this type here we need interface

interface CupSize {
    size: "small" | "medium" | "large"
}

class Chai implements CupSize{
    size: "small" | "medium" | "large" = "large"
} 