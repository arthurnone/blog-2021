#!/bin/bash

path=$(cd "$(dirname "$0")";pwd)

if [ "$1" == "web" ]
then
  echo "run web:"
  docker run -it --rm -p 3000:3000 -v $path:/www node1416 /bin/bash
elif [ "$1" == "server" ]
then
  echo "run server:"
  docker run -it --rm -p 8000:8000 -v $path:/www django32 /bin/bash
elif [ "$1" == "nginx" ]
then
  echo "run nginx:"
  cd docker
  docker-compose -f docker-compose.nginx.yml up
else
  echo "run default:"
  cd docker
  docker-compose -f docker-compose.yml up
fi
