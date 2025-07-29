# 使用轻量的 Debian 镜像作为基础
FROM debian:bullseye-slim

# 安装 PHP-FPM 和 Caddy（使用 apt 版本）
RUN apt-get update && apt-get install -y \
    php-fpm \
    php-cli \
    php-curl \
    php-mbstring \
    php-xml \
    php-mysql \
    curl \
    unzip \
    && apt-get clean

# 安装 Caddy
RUN curl -fsSL https://caddyserver.com/api/download?os=linux&arch=amd64 \
    | tar -xz -C /usr/bin caddy

# 创建运行目录
WORKDIR /app
COPY ./public /app/public
COPY ./Caddyfile /app/Caddyfile

# 将 PHP-FPM 配置复制并修改监听方式（默认用 UNIX socket）
RUN sed -i 's|listen = .*|listen = 9000|' /etc/php/*/fpm/pool.d/www.conf

# 设置默认命令：同时启动 PHP-FPM 和 Caddy
CMD ["sh", "-c", "php-fpm -D && caddy run --config /app/Caddyfile --adapter caddyfile"]
   
