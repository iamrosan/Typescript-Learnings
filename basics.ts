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








export {}