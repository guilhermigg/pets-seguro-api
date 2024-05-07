include .env

.PHONY: up

up:
	docker compose up

.PHONY: app

app:
	docker exec -it pets-app /bin/sh

.PHONY: db

db:
	docker exec -it pets-mongodb bash