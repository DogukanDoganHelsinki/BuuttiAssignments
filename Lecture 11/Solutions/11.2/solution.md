docker run -it ubuntu
apt-get update
apt-get install figlet
figlet hello
exit
```
Observe that if you run ```docker run -it ubuntu``` again, *figlet* is not available.