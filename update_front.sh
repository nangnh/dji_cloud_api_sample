#!/bin/bash

imageName="dji/nginx:latest"

docker stop $(docker ps -aqf "name=cloud_api_sample_nginx_1")

docker rm $(docker ps -aqf "name=cloud_api_sample_nginx_1")

docker rmi $(docker images  -qf "reference=${imageName}")

cd source/nginx/

docker build -t ${imageName} .


