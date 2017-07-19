import { foo as myFoo } from 'bar';

class Foo {
  bar() {
    let foo = 'broken';
    myFoo(foo);
  }
}
