function getName(kind:string|undefined){
    if (typeof kind === 'string'){
        return `Hello ${kind}!`
    }
    return `Hello ${kind}!`
}
console.log(getName("Kaushik"));

// for both suggetions methods change automatically it can be visiable after using dot .
type Chaiorder = {
    type:string,
    sugar:number,
    milk:number,
    
}

function isChaiorder(obj:any):obj is Chaiorder{
    return (
        typeof obj === "object" && obj !== null && "type" in obj && "sugar" in obj && "milk" in obj &&
        typeof obj.type === "string" && typeof obj.sugar === "number" && typeof obj.milk === "number"
    )
}

function isStringArray(arr:unknown) :arr is string []{
    return Array.isArray(arr) && arr.every(item => typeof item === "string")
}
