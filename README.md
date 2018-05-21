# Gladys-Device-HTTP
Gladys hooks for sending http request.

## Prérequis

* Installer le module Gladys Device HTTP


## Pour Installer le module Gladys Device HTTP

1. Aller dans l'onglet "Avancé" de la vue module de Gladys

1. Renseigner tout les champ comme ci dessous (L'URL à renseigner est celui-ci => https://github.com/LeptitGeek/Gladys-Device-HTTP.git) Le slug représente le nom dans lequel le module sera installé donc mettez ce que bon vous semble mais notez le car nous en n'auront besoin plus tard, ici ça sera **device-http**. 

1. Une fois le module installé redémarrez Gladys.

## Utilisation du module

1. Créez un device. 
Donnez lui un petit nom et dans le champ identifier renseignez l'adresse complete de votre device avec un paramètre si vous le souhaitez, ici ça sera http://192.168.1.55:4200/?r= (l'adresse doit comporter l'IP du device ainsi que son Port afin que Gladys puisse le contacter sur le reseau, si vous souhaitez integrer un paramètre il doit être précédé d'un point d'intérogation) 
Pour cet exemple le paramètres intégré est **r** qui correspond à **relais** mais vous pouvez mettre ce que vous voulez. Ensuite son service et son protocole sont très important ! Il faut absolument que le service et le protocole soit identique au slug renseigné au moment de l'installation du module Gladys device HTTP ! Donc dans cet exemple c'est **device-http**.

2. Cliquez sur "Edit" et créé un devicetype.
Depuis la version 0.1.2 il est possible de passer une commande dans le champ identifier du deviceType, ainsi vous pouvez adapter votre requête en fonction du deviceType. Par exemple si vous voulez envoyer un code infrarouge il vous suffit de créer un device nommé "Télécommande" avec son adresse dans l'identifier et après créer autant de deviceType que de bouton sur votre télécommande avec à chaque fois un code infrarouge diffèrent !

3. Vous pouvez maintenant envoyer une requête http depuis Gladys depuis l'onglet device 😁
