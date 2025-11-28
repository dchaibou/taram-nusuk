# 1
FROM node:22-alpine AS build
WORKDIR /app
COPY ./.env.local ./.env.local
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2
FROM node:22-alpine AS runtime
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/.env.local ./.env.local
EXPOSE 3000
CMD ["npm", "start"]