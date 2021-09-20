FROM node:14

# Creo la carpeta para copiar mi info
RUN mkdir -p /usr/src/app

# Me muevo a esa carpeta
WORKDIR /usr/src/app

# Copiamos los json
COPY package*.json ./

# Instalamos los paquetes
RUN yarn

# COPY src ./
COPY . .

# Configuramos
EXPOSE 3010

CMD ["yarn", "start"]