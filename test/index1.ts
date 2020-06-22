import axios, { AxiosResponse } from 'axios'
interface A {
  name: string
}

interface B {
  age: number
}

const requestList: any[] = [axios.get('http://some.1')]

requestList[1] = (axios.get<B>('http://some.2'))

const [{data: a}, response] = await Promise.all(requestList) as [Promise<AxiosResponse<A>>, Promise<AxiosResponse<B>>?]

interface User {
  name: string
  age: number
}

declare function test(para: User): number
declare function test(para: number, flag: boolean): number
declare function test(para: User | number, flag?: boolean): number

const user: User = {
  name: 'Jack',
  age: 666
}

test(user)

class SomeClass {
  public test(para: User): number
  public test(para: number, flag: boolean): number
  public test(para: User | number, flag?: boolean): number {
    if (typeof para === 'number') {
      return 1
    } else {
      return 2
    }
  }
}

const someClass = new SomeClass()

someClass.test(user)
someClass.test(123, false)

// 映射类型
type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M> // Type of 'this' in methods is D & M
}

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data : object = desc.data || {}
  let methods: object = desc.methods || {}
    return { ...data, ...methods } as D & M
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx
      this.y += dy
    }
  }
})

obj.x = 10
obj.y = 20
obj.moveBy(5, 5)


type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never}[keyof T]
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>

interface Part {
  id: number
  name: string
  subparts: Part[]
  updatePart(newName: string): void
}

type T40 = FunctionPropertyNames<Part>
type T42 = FunctionProperties<Part>


type ArrayMethodName = 'filter' | 'forEach' | 'find'

type SelectArrayMethod<T> = {
  [K in ArrayMethodName]: Array<T>[K]
}

interface SomeClass extends SelectArrayMethod<number> {}

class SomeClass {
  value = [1,2,3,4]

  someMethod() {
    this.forEach*
  }
}