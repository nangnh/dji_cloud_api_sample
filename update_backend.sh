#!/bin/bash

imageName="dji/cloud_api_sample:latest"

docker stop $(docker ps -aqf "name=cloud_api_sample_1")

docker rm $(docker ps -aqf "name=cloud_api_sample_1")

docker rmi $(docker images  -qf "reference=${imageName}")

cd source/backend_service/

docker build -t ${imageName} .

