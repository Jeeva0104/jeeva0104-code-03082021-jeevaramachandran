from node:8.11.2-slim
WORKDIR /usr/src/app 
COPY package.json /usr/src/app                                                                                                      
RUN npm i
COPY . /usr/src/app
EXPOSE  8000
ENV NODE_ENV development
CMD ["npm", "start"]