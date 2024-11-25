FROM node:16-alpine3.16 AS deps

RUN npm install -g pnpm

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM node:16-alpine3.16 AS BUILD_IMAGE

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build

RUN rm -rf node_modules
RUN pnpm install --production --frozen-lockfile --ignore-scripts --prefer-offline


FROM node:16-alpine3.16

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S userapp -u 1001

WORKDIR /app
COPY --from=BUILD_IMAGE --chown=userapp:nodejs /app/package.json /app/pnpm-lock.yaml ./
COPY --from=BUILD_IMAGE --chown=userapp:nodejs /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE --chown=userapp:nodejs /app/public ./public
COPY --from=BUILD_IMAGE --chown=userapp:nodejs /app/.next ./.next

COPY --from=BUILD_IMAGE --chown=userapp:nodejs /app/next.config.js  ./  

USER userapp

EXPOSE 3000

CMD [ "pnpm", "start" ]
