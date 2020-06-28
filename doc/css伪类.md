# css 伪类

1. ::first-line | 选择文本第一行

   只能在块容器中使用

```css
p:first-line {
  color: lightcoral;
}
```

2. ::first-letter | 选择这一行的第一字

```css
p::first-letter {
  color: red;
}
```

3. ::selection| 被用户高亮的部分

```css
div::selection {
  color: #000;
}
```

4. :root | 根元素

   根元素就是 html, 除了优先级更高以外,其他都一样

```css
:root {
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
```

5. :empty | 仅当子项为空时才有作用

```html
<style>
  div:empty {
    border: 2px solid orange;
    margin-bottom: 10px;
  }
</style>
<div></div>
<div></div>
<div></div>
```

6. :only-child | 只有一个子元素才有作用

   :only-child 匹配没有任何兄弟元素的元素.等效的选择器还可以写成 :first-child:last-child 或者:nth-child(1):nth-last-child(1),当然,前者的权重会低一点。

```html
<style>
  p:only-child {
    background: #409eff;
  }
</style>
<div>
  <p>第一个没有任何兄弟元素的元素</p>
</div>
<div>
  <p>第二个</p>
  <p>第二个</p>
</div>
```

7. :first-of-type :last-of-type 指定类型的元素

```html
<style>
  .innerDiv p:first-of-type {
    color: orangered;
  }
</style>

<div class="innerDiv">
  <div>Div1</div>
  <p>These are the necessary steps</p>
  <p>hiya</p>

  <p>Do <em>not</em> push the brake at the same time as the accelerator.</p>
  <div>Div2</div>
</div>
```

7. :nth-of-type() :nth-last-of-type() | 选择指定类型的子元素

```css
.innerDiv p:nth-of-type(1) {
  color: orangered;
}
```

8. :checked | 选择一个选中的复选框

```css
  input:checked {
    box-shadow: 0 0 0 3px hotpink;
  }

  <input type="checkbox" />
```

9. :valid | 选择一个有效的元素

   :valid CSS 伪类表示内容验证正确的`<input>`或其他 <form> 元素。这能简单地将校验字段展示为一种能让用户辨别出其输入数据的正确性的样式。

```css
input:valid {
  box-shadow: 0 0 0 3px hotpink;
}
```

10. :invalid | 选择一个无效的元素

    :invalid CSS 伪类 表示任意内容未通过验证的`<input>` 或其他 <form> 元素。

```css
input[type="text"]:invalid {
  border-color: red;
}
```

11. :not() | 用来匹配不符合一组选择器的元素

    CSS 伪类 :not() 用来匹配不符合一组选择器的元素。由于它的作用是防止特定的元素被选中，它也被称为反选伪类（negation pseudo-class）。

```html
<style>
  .innerDiv :not(p) {
    color: lightcoral;
  }
</style>

<div class="innerDiv">
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <div>Div 1</div>
  <p>Paragraph 3</p>
  <div>Div 2</div>
</div>
```
