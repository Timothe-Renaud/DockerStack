#######################
# Auto script qui copy est lance le stack de containers Docker.
# @Author: Timothe-renaud Langlois-Teston
# @Date: 27 Janv 2021
#######################
$text = @"

________  ___  ___  _________  ________          ________  _______   ________  ___       ________      ___    ___ _______                                 
|\   __  \|\  \|\  \|\___   ___\\   __  \        |\   ___ \|\  ___ \ |\   __  \|\  \     |\   __  \    |\  \  /  /|\  ___ \                                
\ \  \|\  \ \  \\\  \|___ \  \_\ \  \|\  \       \ \  \_|\ \ \   __/|\ \  \|\  \ \  \    \ \  \|\  \   \ \  \/  / | \   __/|                               
 \ \   __  \ \  \\\  \   \ \  \ \ \  \\\  \       \ \  \ \\ \ \  \_|/_\ \   ____\ \  \    \ \  \\\  \   \ \    / / \ \  \_|/__                             
  \ \  \ \  \ \  \\\  \   \ \  \ \ \  \\\  \       \ \  \_\\ \ \  \_|\ \ \  \___|\ \  \____\ \  \\\  \   \/  /  /   \ \  \_|\ \                            
   \ \__\ \__\ \_______\   \ \__\ \ \_______\       \ \_______\ \_______\ \__\    \ \_______\ \_______\__/  / /      \ \_______\                           
    \|__|\|__|\|_______|    \|__|  \|_______|        \|_______|\|_______|\|__|     \|_______|\|_______|\___/ /        \|_______|                           
 ________  ________  ________  ___  __    _______   ________          ________  _________  ________  ________  ___  __    ________  _______   ________     
|\   ___ \|\   __  \|\   ____\|\  \|\  \ |\  ___ \ |\   __  \        |\   ____\|\___   ___\\   __  \|\   ____\|\  \|\  \ |\_____  \|\  ___ \ |\   __  \    
\ \  \_|\ \ \  \|\  \ \  \___|\ \  \/  /|\ \   __/|\ \  \|\  \       \ \  \___|\|___ \  \_\ \  \|\  \ \  \___|\ \  \/  /|_\|___/  /\ \   __/|\ \  \|\  \   
 \ \  \ \\ \ \  \\\  \ \  \    \ \   ___  \ \  \_|/_\ \   _  _\       \ \_____  \   \ \  \ \ \   __  \ \  \    \ \   ___  \   /  / /\ \  \_|/_\ \   _  _\  
  \ \  \_\\ \ \  \\\  \ \  \____\ \  \\ \  \ \  \_|\ \ \  \\  \|       \|____|\  \   \ \  \ \ \  \ \  \ \  \____\ \  \\ \  \ /  /_/__\ \  \_|\ \ \  \\  \| 
   \ \_______\ \_______\ \_______\ \__\\ \__\ \_______\ \__\\ _\         ____\_\  \   \ \__\ \ \__\ \__\ \_______\ \__\\ \__\\________\ \_______\ \__\\ _\ 
    \|_______|\|_______|\|_______|\|__| \|__|\|_______|\|__|\|__|       |\_________\   \|__|  \|__|\|__|\|_______|\|__| \|__|\|_______|\|_______|\|__|\|__|
                                                                        \|_________|                                                                       
                                                                                                                                                           
                                                                                                                                                           


je vais installer pour toi le docker stack.
Tu bouge j'te nike t'es mort c bon?!!!!

"@

$text2 = @"

Voila c finie frangin lie la notice ci desous avant de partir.

- Visite http://localhost:XXXX pour request l'un des containers
- Listes de ports utilisées:
- markdown -> 10108
- mariadb -> null
- phpmyadmin -> 8081
- mediawiki -> 8090
- owncloud -> 8080
- Front-web -> 8888
- Les logins de la DB sont:
- root ex@mple
- dans database namme changé "localhost" par "mariadb"

"@

$text3 = @"

FireUp containers!!!!!!!!!!

"@

$space=@"


"@
######################################################################
echo $text
Write-Host -NoNewLine 'Press any key to continue...';
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown');
echo $space
$name = Read-Host -Prompt "saisir le nom du dossier : "
mkdir $name
cd $name
git clone https://github.com/Timothe-Renaud/DockerStack.git
cd DockerStack/front
echo $space
$nameBuild = Read-Host -Prompt "saisir le nom de l'image : "
docker build -t $nameBuild .
cd ..
echo $text2
echo $space
Write-Host -NoNewLine 'Press any key to continue...';
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown');
echo $space
echo $text3
echo $space
docker-compose up -d