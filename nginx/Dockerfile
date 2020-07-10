FROM nginx

# Copy Nginx config template
COPY ./default.conf /etc/nginx/conf.d/default.conf

# substitute variable references in the Nginx config template for real values from the environment 
# put the final config in its place
# RUN envsubst '\$PORT \$HEROKU_APP_FRONTEND_URL \$HEROKU_APP_BACKEND_URL' < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf

# Use the "exec" form of CMD so Nginx shuts down gracefully on SIGTERM (i.e. `docker stop`)
CMD [ "nginx", "-g", "daemon off;" ]