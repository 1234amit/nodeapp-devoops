# -------------------------
# Stage 1: Build Dependencies
# -------------------------
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

# -------------------------
# Stage 2: Production Image
# -------------------------
FROM node:18-alpine

WORKDIR /app

# Copy only production dependencies
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/index.js ./index.js
COPY --from=builder /app/package.json ./package.json

# Security: create non-root user
RUN addgroup -S nodegroup && adduser -S nodeuser -G nodegroup

USER nodeuser

EXPOSE 3000

CMD ["node", "index.js"]