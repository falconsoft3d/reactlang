# 1 install Docker
```
apt-get update && apt-get upgrade -y
apt  install docker.io docker-compose -y

sudo apt install curl
sudo curl -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo docker–compose --version
```

# 2 install Docker
```
git clone https://github.com/falconsoft3d/reactlang.git
cd ..
cd reactlang
docker-compose up -d
```
