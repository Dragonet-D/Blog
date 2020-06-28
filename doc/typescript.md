# TypeScript

## Enum类型
使用枚举我们可以定义一些带名字的常量. 使用枚举可以清晰地表达意图或创建一组有区别的用例.TypeScript支持数字的和基于字符串的枚举.

1. 数字枚举

```typescript
enum Direction {
  NORTH,
  SOURTH,
  EAST,
  WEST
}
```
```javascript
'use strict'

var Direction;

(function(Direction) {
  Direction[(Direction['NORTH'] = 0)] = 'NORTH'
})(Direction || (Direction = {}))

var dir = Direction.NORTH
```
## Never 类型

never 类型表示的是那些永不存在的值的类型. 例如, never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式的返回值类型;

```TypeScript
// 返回never的函数必须存在无法到达的终点
function error(message: string): never {
  throw new Error(message)
}

function infiniteLoop(): never {
  while(true) {}
}
```
在TypeScript中, 可以利用 never 类型的特性来实现全面性检查

```TypeScript
type Foo = string | number

function controlFlowAnalysisWithNever(foo: Foo) {
  if (typeof foo === 'string) {
    // 这里 foo 被收窄为 string 类型
  } else if (typeof foo === 'number') {

  } else {
    // foo 在这里是 never
    const check: never = foo
  }
}
```
## 断言
