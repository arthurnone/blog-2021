cd docker
# build web docker
docker build -f Dockerfile.web -t node1416 .

# build server docker
docker build -f Dockerfile.server -t django32 .
