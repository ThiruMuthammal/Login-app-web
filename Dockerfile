FROM nginx

COPY . /usr/share/nginx/html

# Expose $PORT on container.
# We use a varibale here as the port is something that can differ on the environment.
EXPOSE 80
