# 概述
本库提供常用正则表达式验证

# 使用
1. 安装
```shell
$ npm install lg-validator
# OR
$ yarn add lg-validator
```
2. 使用
```typescript
import Validator from 'lg-validator';
if(Validator.ios()) {
  console.log('iOS环境');
}
if(Validator.tel('17398888669')) {
  console.log('手机号验证通过');
}
```

# API
```typescript
// 中文名校验
static username(val: string): boolean;
// 身份证校验
static idCard(val: string): boolean;
// 验证微信号
static weChatId(val: string): boolean;
// 验证QQ号
static qq(val: string): boolean;
// 验证邮箱
static email(val: string): boolean;
// 验证手机号
static tel(val: string): boolean;
// 验证手机验证码
static code(val: string): boolean;
// 验证Android环境
static android(): boolean;
// 验证iOS环境
static ios(): boolean;
// 验证微信环境
static weixin(): boolean;
// 验证是否是刘海屏
static bangScreen(): boolean;
```
