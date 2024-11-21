FROM node:16.6.1-alpine

WORKDIR /usr/src/app
COPY . .

# Add support for https on wget
#RUN apk update && apk add --no-cache wget && apk --no-cache add openssl wget && apk add ca-certificates && update-ca-certificates

# Add phantomjs
#RUN wget -qO- "https://github.com/dustinblackman/phantomized/releases/download/2.1.1a/dockerized-phantomjs.tar.gz" | tar xz -C / \
#    && npm config set user 0 \
#    && npm install -g phantomjs-prebuilt
    
# Add fonts required by phantomjs to render html correctly
#RUN apk add --update ttf-dejavu ttf-droid ttf-freefont ttf-liberation ttf-ubuntu-font-family && rm -rf /var/cache/apk/*

# Installs latest Chromium (92) package.
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      nodejs \
      yarn

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

RUN yarn

# Add user so we don't need --no-sandbox.
#RUN addgroup -S pptruser && adduser -S -g pptruser pptruser \
#    && mkdir -p /home/pptruser/Downloads /app \
#    && chown -R pptruser:pptruser /home/pptruser \
#    && chown -R pptruser:pptruser /app

# Run everything after as non-privileged user.
#USER pptruser

EXPOSE 8080
CMD [ "npm", "start" ]