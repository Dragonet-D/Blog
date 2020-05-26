interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}

type TopNavState = Pick<State, "userId" | "pageTitle" | "recentFiles">; // Pick 返回的是一个接口

/*
 {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
}
*/

type StateType = keyof State;

interface Options {
  width: number;
  height: number;
}

const INIT_OPTIONS = {
  width: 600,
  height: 480,
};

type A = typeof INIT_OPTIONS;

interface Person {
  name: string;
  age: number;
}

const sem: Person = { name: "aa", age: 111 };
type Sem = typeof sem;

function toArray(x: number): Array<number> {
  return [x];
}

type Func = typeof toArray;

enum TestEnum {
  age = "age",
  name = "name",
}

type TestEnumType = keyof typeof TestEnum;

// infer
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

interface ILengthwise {
  length: number;
}

function logginfIdentify<T extends ILengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logginfIdentify({
  length: 1,
  value: 11,
});

// Partial 把某个类型里面的属性全部变成可选
