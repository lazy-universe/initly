# ============================
# 🏗️ 1. Build Stage
# ============================
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies first (better layer caching)
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the project files
COPY . .

# Build the Next.js app
RUN npm run build

# ============================
# 🚀 2. Run Stage
# ============================
FROM node:18-alpine AS runner

WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV=production

# Copy only necessary files from builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

# Install only production dependencies
RUN npm install --omit=dev --legacy-peer-deps

# Expose the port Next.js runs on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
