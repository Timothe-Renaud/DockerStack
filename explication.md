1. 
2. 


# Liste des commande de l'exercise du module 3 :
# docker network create front
# docker network create db
# docker network create backend
# docker volume create shared
# docker run -d --name front --network front --volume shared:/mnt/shared centos tail -f
# docker run -d --name db --network db centos tail -f
# docker run -d --name backend --network backend --volume shared:/mnt/shared centos tail -f
# docker network connect front backend
# docker network connect db backend

curl -L [<https://github.com/docker/compose/releases/download/1.24.1/docker-compose-`uname>](<https://github.com/docker/compose/releases/download/1.24.1/docker-compose-%60uname>) -s-uname -m` -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
# si /usr/local/bin/ n'est pas dans votre $PATH
echo $PATH=$PATH:/usr/local/bin 

# Lancer toute l'infra
docker-compose up
# docker-compose -f monConpose.yml up 
# On voit tous les log de chaque conteneur, CTRL+C pour stopper tous les conteneurs
docker compose up -d # permet de lancer les conteneur en arriere plan
docker-compose exec front bash # similaire a docker run -ti front_1 bash (pas besoin de connaitre le nom exacte du conteneur ni preciser -ti)
docker logs front # afficher les logs du conteneur logs_1