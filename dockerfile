FROM alpine:latest

# Dossier de travail
WORKDIR /app

# Copie des fichiers du projet dans le conteneur
COPY pocketbase ./pocketbase
COPY pb_data ./pb_data
COPY pb_migrations ./pb_migrations
COPY pb_hooks ./pb_hooks

# Donner les permissions d'exécution au binaire
RUN chmod +x /app/pocketbase

# Exposer le port PocketBase
EXPOSE 8090

# Commande de démarrage
CMD ["/app/pocketbase", "serve", "--http=0.0.0.0:8090"]
