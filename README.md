# GentlerLeaveApplication
优雅的向领导请假，一切源于Github上一个故事，https://github.com/NARKOZ/hacker-scripts

## 运行环境
运行在Node环境下，一个娱乐的小项目，主要解决自动化请假。

## 原理
通过扫描程序员是否登录服务器，来判断某个时间点是否已经在工作，如果不在工作，自动从提前存储好的理由里随机获取一条，发送给领导，以此请假。

## 运行
1.`npm install`。

2.修改`app.js`中邮箱地址，密码，发送人，抄送人，及邮箱服务器（示例中使用的是腾讯企业邮箱）。

3.`node app.js`运行项目。
