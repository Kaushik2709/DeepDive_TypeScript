type Role = "admin" | "user" | "guest"

function printRole(role:Role): void{
    if(role === "admin"){
        console.log("You are a admin");
        return
    }
    else if(role === "user"){
        console.log("You are a user");
        return
    }
    // Other edge cases handles perfectly but now if this role need to be handled then we can use never type in never type the edge case will be handled automatically. Just need to be define type of the Role then .ts will automatically handle the edge case
    role;
}

function neverReturn():never{
    while(true){
        throw new Error("Error")
    }
}