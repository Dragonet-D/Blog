# TypeScript

### 数据类型

- number：包括浮点数，以及 NaN、±Infinity
- string: 字符串类型
- boolean: {true false}
- null
- undefined
- symbol
- void: {null undefined}

#### 对象类型

```typscript
type point2d = {
  x: number
  y: number
}
const center: point2d = {
  x: 1,
  y: 2
}
type httpHeader = {
  [key string]: string | number
}
```

#### 函数类型

#### 签名
