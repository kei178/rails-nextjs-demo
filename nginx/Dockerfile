FROM nginx:1.18.0

# Copy Nginx config template
COPY ./default.conf /tmp/docker.nginx
COPY ./nginx.conf /etc/nginx/nginx.conf

# Use the "exec" form of CMD so Nginx shuts down gracefully on SIGTERM (i.e. `docker stop`)
CMD /bin/bash -c "envsubst '\$PORT \$SERVER_HOST' < /tmp/docker.nginx > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'