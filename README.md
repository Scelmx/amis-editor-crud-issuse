# 复现步骤

1. 执行 `pnpm i `
2.` pnpm dev:webpack`
3. 打开 `localhost:9999`
4. 拖动增删改查组件至页面，下面可选其中一个步骤复现：
-  进入大纲，首先选择 <ID>列，然后点击父级的表格
-  选中其中一列，hover 至 <ID>列，点击表格，然后页面就会出现崩溃，截图如下：

![复现图](./p1.png)
