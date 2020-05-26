# TypeScript工具类型

### 一、类型别名
```typescript
type Pet = 'cat' | 'dog';
let pet: Pet;

pet = 'cat'; // Ok
pet = 'dog'; // Ok
pet = 'zebra'; // Compiler error
```

### 二、基础知识

#### 2.1 typeof
在 TypeScript 中，typeof 操作符可以用来获取一个变量声明或对象的类型。

```typescript
interface Person {
  name: string;
  age: number;
}

const sem: Person = { name: 'semlinker', age: 30 };
type Sem= typeof sem; // -> Person

function toArray(x: number): Array<number> {
  return [x];
}

type Func = typeof toArray; // -> (x: number) => number[]
```

### 2.2 keyof
keyof 操作符可以用来一个对象中的所有 key 值：

```typescript
interface Person {
    name: string;
    age: number;
}

type K1 = keyof Person; // "name" | "age"
type K2 = keyof Person[]; // "length" | "toString" | "pop" | "push" | "concat" | "join"
type K3 = keyof { [x: string]: Person };  // string | number
```