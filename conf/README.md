# DockerStack
stack de plusieurs appli web.

Composent:
- 

File:
- README.md
- docker-compose.yml
- - front/Dockerfile


# Procédure:
1. git clone "le REPO"
2. cd .\front\
4. Lancé la commande < docker build -t myapp . > pour créé une image du site react appellé "my-app"
5. < docker run -p "MonPortDeRedirection":80 myapp > pour testé l'image
6. Retourné dans le dossier parent.
7. Executer docker-compose up pour lancé le stack d'aplis complet


