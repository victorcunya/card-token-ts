.DEFAULT_GOAL :=help
.PHONY: venv
.EXPORT_ALL_VARIABLES:

PROJECT_NAME = services
DOCKER_NETWORK = culqi_network


build: ## construir imagen: make build
	@docker-compose -p $(PROJECT_NAME) build

up: ## levantar redis: make up
	@make network &> /dev/null
	@docker-compose -p $(PROJECT_NAME) up -d
	@docker-compose -p $(PROJECT_NAME) ps

down: ## apagar redis: make down
	@docker-compose -p $(PROJECT_NAME) down

network: ## verificar si la red fue creada: make network
	@if [ -z $$(docker network ls | grep $(DOCKER_NETWORK) | awk '{print $$2}') ]; then\
		(docker network create $(DOCKER_NETWORK));\
	fi

## HELP TARGET ##
help:
	@printf "\033[31m%-22s %-59s %s\033[0m\n" "Target" " Help" "Usage"; \
	printf "\033[31m%-22s %-59s %s\033[0m\n"  "------" " ----" "-----"; \
	grep -hE '^\S+:.*## .*$$' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' | sort | awk 'BEGIN {FS = ":"}; {printf "\033[32m%-22s\033[0m %-58s \033[34m%s\033[0m\n", $$1, $$2, $$3}'
