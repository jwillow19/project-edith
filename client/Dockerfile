FROM nginx:alpine

COPY /build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]