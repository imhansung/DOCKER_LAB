## MySQL 도커파일 생성방법
```txt
FROM mysql

ENV MYSQL_USER=ssar
ENV MYSQL_PASSWORD=ssar1234
ENV MYSQL_ROOT_PASSWORD=root1234
ENV MYSQL_DATABASE=ssardb

CMD [ "--character-set-server=utf8mb4", "--collation-server=utf8mb4_unicode_ci"]
```

## UTF 8 설정확인
```sh
SHOW VARIABLES LIKE 'character_set_%';
```

## 볼륨 옵션으로 실행하는 법
```sh
docker run -d -v C:\Users\curonsys02\DOCKER_LAB\ex05\mysql-volume:/var/lib/mysql -p 3307:3306 --name mysql-container mysql-image
```
```sh
docker run -d -v C:/Users/curonsys02/DOCKER_LAB/ex05/mysql-volume:/var/lib/mysql -p 3307:3306 --name mysql-container mysql-image
```


## 이름이 있는 볼륨 사용법
```sh
docker run -d -v mysql-volume:/var/lib/mysql -p 3307:3306 --name mysql-container mysql-image
```