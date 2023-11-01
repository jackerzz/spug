### install mysqlclient
```shell
# for centos 7
yum install mariadb-devel python3-devel gcc
pip install mysqlclient
```
docker build -t dome .
docker build -t dome -f docs/docker/Dockerfile .
