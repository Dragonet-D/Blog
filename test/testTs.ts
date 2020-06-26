enum Enum {
  NORTH
}

console.log(Enum.NORTH);

let someValue: any = 'this is a string'
let straLength: number = (<string>someValue).length

// as 语法
let someValue1: any = 'this is a string'
let straLength1: number = (someValue1 as string).length