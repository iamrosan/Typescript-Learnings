// functions

function adddition(num : number) : number{
    return num+1
}

function getLower(value : string) : string{
    return value.toLowerCase()
}

function signUp(name: string, email:string, password:boolean = false){

}

adddition(10)

getLower("Roshan")

// signUp("roshan","@gmail.com",true)

signUp("roshan","@yahoo.com")


function getValue(value:number) {
    if(value < 0){
        return "negative"
    }
    return 23
}

const printHello = (name:string) : string =>{
    return name
}

const heros = ["ironman", "captain america", "thor", 10]

heros.map((hero):string=>{
    return `heros is ${hero}.`
})

function consoleError(err:string):void{ // it doesn't return value
    console.log(err)
}

function handleError(err:string):never{ // it doesn't return value uses for robost handling
    throw new Error(err)
}



// OBjects
const User = {
    name:"roshan",
    email:"roshan@gmail.com",
    isActive : true,
}

function createUser({name:string,isActive:boolean}):{}{
    return {fname:"Roshan", lname:"Stha"}
}


// type
type User1 = {
    readonly _id: string,  // id of the user do not changes read only property
    name:string,
    email:string,
    isActive:boolean
    creditCardDetails?:number
}


let user1 : User1 ={
    _id:"123",
    name:"Roshan",
    email:"r@gmail.com",
    isActive:false
}

type cardNumber = {
    cardNumber:string
}

type cardDate = {
    cardDate:string
}

type cardDetails = cardNumber & cardDate  & {
    cvv:number
}



user1.email = "roshanshrestha@gmail.com"
// user1._id = "123" 


// UNION
let score : number | string = 33;
score = 23
score = "ten"

type GameUser={
    id:number,
    name:string,

}

type Admin = {
    username:string,
    id:number
}



export {}