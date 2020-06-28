var INIT_OPTIONS = {
    width: 600,
    height: 480
};
var sem = { name: "aa", age: 111 };
function toArray(x) {
    return [x];
}
var TestEnum;
(function (TestEnum) {
    TestEnum["age"] = "age";
    TestEnum["name"] = "name";
})(TestEnum || (TestEnum = {}));
function logginfIdentify(arg) {
    console.log(arg.length);
    return arg;
}
logginfIdentify({
    length: 1,
    value: 11
});
// Partial 把某个类型里面的属性全部变成可选
