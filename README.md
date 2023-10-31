## gitpod 快速开始

> [![](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/jackerzz/spug)

> 基于docker 模拟真实环境服务器,用于主机管理中添加测试服务器
```sh
sudo docker run -d -p 5501:22 --name mn_1 rastasheep/ubuntu-sshd:14.04
sudo docker run -d -p 5502:22 --name mn_2 rastasheep/ubuntu-sshd:16.04
sudo docker run -d -p 5503:22 --name mn_3 rastasheep/ubuntu-sshd:18.04
```
>> 验证容器ssh
```sh
ssh root@localhost -p 5501
```

## 特性

- **批量执行**: 主机命令在线批量执行
- **在线终端**: 主机支持浏览器在线终端登录
- **文件管理**: 主机文件在线上传下载
- **任务计划**: 灵活的在线任务计划
- **发布部署**: 支持自定义发布部署流程
- **配置中心**: 支持KV、文本、json等格式的配置
- **监控中心**: 支持站点、端口、进程、自定义等监控
- **报警中心**: 支持短信、邮件、钉钉、微信等报警方式
- **优雅美观**: 基于 Ant Design 的UI界面
- **开源免费**: 前后端代码完全开源


## 环境

* Python 3.6+
* Django 2.2
* Node 12.14
* React 16.11

## 预览

### 主机管理
![image](https://cdn.spug.cc/img/3.0/host.jpg)

#### 主机在线终端
![image](https://cdn.spug.cc/img/3.0/web-terminal.jpg)

#### 文件在线上传下载
![image](https://cdn.spug.cc/img/3.0/file-manager.jpg)

#### 主机批量执行
![image](https://cdn.spug.cc/img/3.0/host-exec.jpg)
![image](https://cdn.spug.cc/img/3.0/host-exec2.jpg)

#### 应用发布
![image](https://cdn.spug.cc/img/3.0/deploy.jpg)

#### 监控报警
![image](https://cdn.spug.cc/img/3.0/monitor.jpg)

#### 角色权限
![image](https://cdn.spug.cc/img/3.0/user-role.jpg)