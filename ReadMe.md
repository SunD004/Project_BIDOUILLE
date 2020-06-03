# React Native préparation de l'environement

#### oc officiel
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




# Cree son projet react **
#### npx react-native init AwesomeProject
#### cd AwesomeProject
#### npm install (installer les dependances du projet)
#### npm start (lancer l'app)

## Lancer android studio
> android-studio sur le terminal ou via double clique sur le logiciel (installation via package/software)
#### OU
> ./bin/studio.sh (avec l'installaton via le fichier)