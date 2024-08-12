# Use an official Nginx image as a parent image
FROM nginx:alpine

# Copy the static HTML file to the Nginx container
COPY ./index.html /usr/share/nginx/html

# Copy the JavaScript file to the Nginx container
COPY ./index.js /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container has provisioned.
CMD ["nginx", "-g", "daemon off;"]