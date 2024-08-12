# Usando a imagem oficial do Node.js
FROM node:18-alpine

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos para o contêiner
COPY . .

# Expor a porta onde a aplicação React vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
