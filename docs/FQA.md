### install mysqlclient
```shell
# for centos 7
yum install mariadb-devel python3-devel gcc
pip install mysqlclient
```
## 打包web
rm -rf node_modules/ && nvm install 12 && nvm use 12 && npm install --registry=https://registry.npm.taobao.org && npm run build

# 打包镜像
docker build -t devops -f docs/docker/Dockerfile .
docker tag devops:latest  erlancode/devops:v1
docker push erlancode/devops:v1
# 运行容器
docker run -d --name sonarqube -e MYSQL_DATABASE=devops -e MYSQL_USER=root -e MYSQL_PASSWORD=root -e MYSQL_HOST=43.97.182.182 -e MYSQL_PORT=53306  -v /data/spug/repos:/data/repos -p 80:80 devops:latest

# 初始化账户
docker exec spug init_spug admin Yhblsqt