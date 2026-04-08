# 架构说明

## 仓库结构

平台当前采用单仓多前端 + 统一后端的结构：

| 模块 | 作用 |
| --- | --- |
| `back-python` | 统一后端能力中心 |
| `smart-flow-admin` | `public` 超管独立前端 |
| `smart-flow-local` | `tenant_1001` 企业交付前端 |
| `sync-flow` | `tenant_1002` 企业交付前端 |
| `smart-flow-free` | `tenant_1000` 个人免费版前端 |
| `front-vue-hack` | 聚合联调壳层 |
| `smartflow-cli` | 本地接入与未来 Agent 入口 |

## 数据与租户边界

### `public`

负责：

- 平台超管
- 客户台账
- 租户管理
- 平台审计
- 模板分发治理

### tenant schema

负责：

- 用户、角色、菜单、参数、公告
- 脚本与 Skill 注册
- 执行记录
- 调度日志
- 业务扩展表

## 前端开发纪律

当前固定规则是：

1. 单项目先改
2. 验证通过后最后同步到 `front-vue-hack`
3. 不把 `tenant_1002` 功能混进 `tenant_1001`
4. `public` 能力只落在 `smart-flow-admin`

## 为什么这套结构适合当前阶段

- 能直接接企业客户项目
- 能同时保留平台治理能力
- 能承接个人免费版增长入口
- 能持续往模板、Agent、任务流和产品化方向扩展

## 当前文档站内容

这个 VitePress 站点包含：

- 平台介绍
- 核心能力说明
- 版本路线
- 联系入口
