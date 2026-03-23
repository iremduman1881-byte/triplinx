# 1. Node.js imajını çek
FROM node:18-slim

# 2. Çalışma klasörünü belirle
WORKDIR /app

# 3. Bağımlılıkları kopyala ve yükle
COPY package*.json ./
RUN npm install --production

# 4. Tüm kodları kopyala
COPY . .

# 5. Portu dışarı aç ve başlat
EXPOSE 8080
CMD ["npm", "start"]
