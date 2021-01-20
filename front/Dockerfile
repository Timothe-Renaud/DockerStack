FROM node:latest as react_build 
#also say 
WORKDIR /app
#copy the react app to the container
COPY . /app/ 

# #prepare the contiainer for building react 
RUN npm install
RUN npm run build 

#prepare nginx
FROM nginx:latest

COPY --from=react_build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d



#fire up nginx
EXPOSE 80 
CMD ["nginx","-g","daemon off;"]