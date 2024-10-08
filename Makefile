# Variables
IMAGE_NAME=fortnite-api
TAG=latest
CONTAINER_NAME=fortnite-api

# Build the Docker image
build:
	docker build -t $(IMAGE_NAME):$(TAG) .

# Run the Docker container
run:
	docker run --name $(CONTAINER_NAME) --detach --network app --restart always $(IMAGE_NAME):$(TAG)

# Stop the Docker container
stop:
	docker stop $(CONTAINER_NAME) && docker rm $(CONTAINER_NAME)

# Clean up
clean:
	docker rmi $(IMAGE_NAME):$(TAG)

all: stop clean build run
