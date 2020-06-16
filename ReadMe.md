# React Native préparation de l'environement

#### Doc officiel
* https://reactnative.dev/docs/environment-setup

#### Node.JS
* https://github.com/nodesource/distributions/blob/master/README.md

#### Installer JAVA 
* #### Ubuntu
    * sudo add-apt-repository ppa:webupd8team/java
    * sudo apt-get update
    * sudo apt-get install oracle-java8-installer
    * sudo apt-get install oracle-java8-set-default
* #### Fedora
    * sudo dnf install java-11-openjdk.x86_64

**Android studio**
* **https://developer.android.com/studio/index.html (installation via le dossier)**
* **via ubuntu software pour ubuntu ou via les paquets (idm pour fedora)**
* https://fedoraproject.org/wiki/Android_Studio

## Installer les dependances de android-studio
#### Ubuntu
    sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1 libbz2-1.0:i386
#### Fedora
    sudo yum install zlib.i686 ncurses-libs.i686 bzip2-libs.i686


## Exercice 1 

# Cree son projet react
    npx react-native init AwesomeProject
    cd AwesomeProject
    npm install (installer les dependances du projet)
    npx react-native run-android (pour générer les fichiers android)

## Exercice 2

### 1er étape

#### Lancer android studio
    android-studio sur le terminal ou via double clique sur le logiciel (installation via package/software)
#### OU
    ./bin/studio.sh (avec l'installaton via le fichier)

* **Cliquer sur "Open an existing android studio project" et allez chercher votre projet react native et cliquez sur app qui ce trouve dans /android/app puis cliquez sur OK**
* **Dans android studio votre projet va se charger il faut maintenant cliquez sur File puis 'Sync Project With Gradle Files'**

### 2ième étape

## Une fois que votre projet est synchronisé et que vous avez eu 0 erreurs nous allons pouvoir lancer l'app sur un téléphone !

    Vous avez 2 choix sois vous télécharger un emulateur de téléphone directement via android studio (nécéssite une bonne conexion pour faire le download) sous vous branchez votre téléphone avec votre cable USB a votre PC.

* **Pour télécharger un emulateur sur android-studio rendez vous dans "Tools -> AVD Manager -> + Create Virtual Device" ensuite selectionner le téléphone que vous voulez (Pixel 2 pour moi) puis cliquez sur Next. Maintenant il faut download l'OS android de votre téléphone, pour notre projet il nous faut un OS API LEVEL 28 il s'appelle 'Pie' ensuite cliquer sur Next cela va lancer un download, a la fin de ce download vous cliquez sur Next puis sur Finish**

* **Pour brancher votre telephone il suffit de brancher votre cable usb de votre ordinateur a votre téléphone. Ensuite vous devez activer le mode dévellopeur sur votre téléphone pour l'activer il suffit de vous rendre dans les paramètres de votre téléphone de cliquez sur 'A propos du téléphone' puis de spam clique votre Numéros de Build, si le mode dev est activé un petit message va apparaître. Si cette méthode fonctionne pas pour vous je vous invites a regarder sur internet en fonction de votre modele**

**Si tout ce passe bien pour vous allez voir un appareil apparaitre dans la scroll box a droite de la scroll box 'app'. Si c'est le cas rendez vous dans le project react native a la racine est faites la commande 'npm start' pour lancer l'app. Ensuite allez sur android studio et cliquez sur le petit martaux vert a gauche de la scroll box 'app' (ca lance le build du projet) puis une fois le build terminé cliquer sur le bouton play a droite de la scroll box des appareils disponibles ou via 'Run -> run app'**

## Exercice 3

#### C'est parti votre environnement travail est pret est vous allez pouvoir coder! C'est galère hein? ;D

**Dans un premier temps nous allons suprimmer tout le code de bienvenue que react nous met dans App.js pour nous expliquez des trucs**

* **Remplacer tout le code par celui-ci :**

```
import React from 'react';
import { Text } from 'react-native'

const App = props => {
    return (
        <Text>
        Hello le workshop
        </Text>
    )
}
```

**Votre premier exercice sera de faire un simple compteur et decompteur plus l'affichage de la variable sur votre téléphone. Vous avez donc un bouton "+" un bouton "-" et entre les deux la variable du compteur**

## Exercice 4

#### Bon c'est bien jolie mais maintenant on va decouvrir REDUX ! :O

* **npm install --save react-redux**

**Vous allez maintenant faire le meme exercice mais cette fois en utilisant le framework redux dans votre app**