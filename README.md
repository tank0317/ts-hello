TypeScript 示例项目

该项目用于测试使用 ts 编译器 和 Babel 编译 TS 的区别，以及应该如何与打包工具配合。

关于 ts 编译器 与 Babel 的区别，可以参考文章[《为什么 Babel 要支持编译 TypeScript》](https://juejin.im/post/5e034b9ee51d455820602e6a)

同时该项目中还作为[《如何使用 VS Code 调试 Node.js》](https://juejin.im/post/5e042967e51d45584d239e86) 的示例项目

## 编译

该项目提供了四种编译打包 TS 的方式，分别如下：

1. `npm run rollup-t`, 使用 rollup + typescript 编译
2. `npm run rollup-b`, 使用 rollup + babel 编译
3. `npm run webpack-t`, 使用 webpack + typescript 编译
4. `npm run webpack-b`, 使用 webpack + babel 编译

你可以选择使用不同的命令，然后查看打包后代码的异同。