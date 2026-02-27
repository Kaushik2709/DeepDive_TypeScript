const Chai = {
    name: "Masala Chai",
    price:20,
    isHot:true
}

// Declearing Object Type

let tea:{
    name:string,
    price:number,
    isHot:boolean
} = {
    name: "Masala Chai",
    price:20,
    isHot:true
}

// Duck typing - means if a object has 2 properties then we add another property it will accept

let tea2 = {
    name: "Masala Chai",
    price:20,
    isHot:true,
    size:"large"
}

tea = tea2

// if we want to add more properties then we can use readonly keyword

let tea3:{
    readonly name:string,
    price:number,
    isHot:boolean
} = {
    name: "Masala Chai",
    price:20,
    isHot:true
}

// tea3.name = "Green Tea" // Error: Cannot assign to 'name' because it is a read-only property.

// if we want to add more properties then we can use ? keyword

let tea4:{
    name:string,
    price:number,
    isHot:boolean,
    size?:string
} = {
    name: "Masala Chai",
    price:20,
    isHot:true
}

// tea4.size = "large" // Error: Cannot assign to 'size' because it is a read-only property.

// we can partially update the value or pass the value 

type Chai = {
    name:string,
    price:number,
    isHot:boolean
}

const updateChai = (update : Partial<Chai>)=>{
    console.log("updating chai with", update)
}

// so here we are partially passing the value of the object beacuse of that "Partial" keyword 
updateChai({price:25})

// also we have a Required property so then we need all property to pass the value 
type RequiredChai = Required<Chai>

const updateChai2 = (update : RequiredChai)=>{
    console.log("updating chai with", update)
}

updateChai2({price:25, name:"Masala Chai", isHot:true})

// we can also use readonly property 
type ReadonlyChai = Readonly<Chai>

const updateChai3 = (update : ReadonlyChai)=>{
    console.log("updating chai with", update)
}

updateChai3({price:25, name:"Masala Chai", isHot:true})

// updateChai3.name = "Green Tea" // Error: Cannot assign to 'name' because it is a read-only property.


// Pick utility type: constructs a type by picking a set of properties from T
type ChaiBasicInfo = Pick<Chai, "name" | "price">

const showBasicChai = (info: ChaiBasicInfo) => {
    console.log("Basic info:", info)
}

showBasicChai({ name: "Ginger Chai", price: 30 })

// Omit utility type: constructs a type by picking all properties from T and then removing keys
type ChaiWithoutStatus = Omit<Chai, "isHot">

const updateChaiBasic = (update: ChaiWithoutStatus) => {
    console.log("Updating without hot status:", update)
}

updateChaiBasic({ name: "Cardamom Chai", price: 35 })

