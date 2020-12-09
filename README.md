# 概述
本库提供常用正则表达式验证

# API
```
/**
  * 中文名校验
  * @param val
  */
static username(val: string): boolean;
/**
  * 身份证校验
  * @param val
  */
static idCard(val: string): boolean;
/**
  * 验证微信号
  * 1. 可使用6-20个字母、数字、下划线和减号；
  * 2. 必须以字母开头（字母不区分大小写）；
  * 3. 不支持设置中文；
  * @param val
  */
static weChatId(val: string): boolean;
/**
  * 验证QQ号
  * @param val
  */
static qq(val: string): boolean;
/**
  * 验证邮箱
  * @param val
  */
static email(val: string): boolean;
/**
  * 验证手机号
  * @param val
  */
static tel(val: string): boolean;
/**
  * 验证手机验证码
  * @param val
  */
static code(val: string): boolean;
/**
  * 验证Android环境
  */
static android(): boolean;
/**
  * 验证iOS环境
  */
static ios(): boolean;
/**
  * 验证微信环境
  */
static weixin(): boolean;
/**
  * 验证是否是刘海屏
  */
static bangScreen(): boolean;
```
