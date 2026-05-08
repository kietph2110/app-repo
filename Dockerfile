# Stage 1: Build - Cài đặt thư viện
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Final image - Chỉ lấy những gì cần thiết để chạy
FROM node:18-alpine
WORKDIR /app
# Chỉ copy các file từ stage builder sang
COPY --from=builder /app .
EXPOSE 3000
CMD ["npm", "start"]
