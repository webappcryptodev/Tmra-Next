# Reference: https://nextjs.org/docs/deployment#docker-image

# --- Builder ---

# FROM node:lts-slim AS builder

# ENV NO_COLOR 1
# ENV FORCE_COLOR 0
# ENV CI true
# ENV NODE_ENV production

# # USER node
# WORKDIR /app

# # COPY lerna.json ./
# COPY .yarnrc.yml ./
# COPY package*.json ./
# COPY yarn.lock ./
# COPY .yarn/ ./.yarn/
# COPY node_modules/ ./node_modules/
# COPY .next/cache/ ./.next/cache/

# RUN yarn --immutable

# WORKDIR /app
# COPY . /app/
# RUN yarn build

# --- Runtime ---

FROM node:lts-slim

# ENV NO_COLOR 1
# ENV FORCE_COLOR 0
ENV NODE_ENV production
ENV APP_ENV prod
ARG APP_VERSION
ENV APP_VERSION=${APP_VERSION}

WORKDIR /app/

RUN addgroup --gid 1001 --system nodejs
RUN adduser --system nextjs --uid 1001 --ingroup nodejs

# Seldom changed first
# COPY --from=builder /app/.pnp.* ./
COPY package.json ./package.json
COPY node_modules/ ./node_modules/
# COPY /app/.yarnrc.yml ./
# COPY /app/.yarn/ ./.yarn/

# You only need to copy next*.config.js if you are NOT using the default configuration
COPY next-i18next.config.js ./
COPY next.config.js ./
COPY public/ ./public/
COPY --chown=nextjs:nodejs .next/ ./.next/

USER nextjs
EXPOSE 3000
ENV PORT 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

# CMD ["node", "-r", "./.pnp.cjs", "packages/mandalika-worker/dist/main.js"]

CMD ["node_modules/.bin/next", "start"]
