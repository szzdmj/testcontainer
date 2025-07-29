FROM debian:bullseye-slim

# 安装 PHP-FPM 和 Caddy
RUN apt-get update && apt-get install -y \
  php php-fpm php-cli php-mbstring php-curl php-xml php-mysql \
  curl unzip && \
  curl -fsSL https://getcaddy.com | bash -s personal && \
  apt-get clean && rm -rf /var/lib/apt/lists/*

# 设置 PHP-FPM 工作目录
RUN mkdir -p /run/php

# 拷贝 public 内容
COPY ./public /srv

# 设置工作目录
WORKDIR /srv

# 拷贝 Caddyfile
COPY ./public/Caddyfile /etc/caddy/Caddyfile

# 启动 php-fpm 和 caddy
CMD php-fpm -D && caddy run --config /etc/caddy/Caddyfile --adapter caddyfile
      
