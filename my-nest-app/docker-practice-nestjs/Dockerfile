# ── Stage 1: Builder ──────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests first (layer caching: only re-runs
# npm install if package.json actually changed)
COPY package*.json ./

RUN npm ci

# Copy source and compile TypeScript → /app/dist
COPY . .
RUN npm run build

# ── Stage 2: Runner ───────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

# Only production deps — much smaller layer
COPY package*.json ./
RUN npm ci --only=production

# Copy compiled output from the builder stage (not node_modules!)
COPY --from=builder /app/dist ./dist

# Tell Docker which port NestJS listens on (documentation only)
EXPOSE 3000

CMD ["node", "dist/main"]