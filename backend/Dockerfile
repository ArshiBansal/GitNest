FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
RUN npm ci --only=production

FROM node:20-alpine AS production
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY . .

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

CMD ["node", "src/index.js"]
EXPOSE 5000
CMD ["node", "src/index.js"]
