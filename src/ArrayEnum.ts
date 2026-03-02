type Chai = {
    name:string,
    price:number,
    isHot?:boolean
}

const menu : Chai[] = [
    {name:"Masala Chai", price:25, isHot:true},
    {name:"Green Chai", price:20, isHot:true},
    {name:"Masala Chai", price:25, isHot:true},
]

const cities :readonly string[] = ["Delhi", "Mumbai", "Bangalore"]

// cities.push("Chennai") // Error: Property 'push' does not exist on type 'readonly string[]'.

// Tuples

let chaiTuple : [string, number, boolean?] 
chaiTuple = ["Masala Chai", 25, true]

// Enums
enum Size {
    Small,
    Medium,
    Large
}

const size = Size.Medium
enum Status{
    pending = 100,
    success = 200,
    error = 300
}

enum ChaiType {
    MASALA = "Masala",
    GREEN = "Green",
    CHAMO = "Chamomile"
}

const chai : ChaiType = ChaiType.MASALA
