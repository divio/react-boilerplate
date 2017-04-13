FROM node:6.10

COPY package.json .
RUN npm install

COPY . /app

# noop for legacy migration
RUN echo "#!/bin/bash" > /app/migrate.sh && \
    chmod +x /app/migrate.sh


WORKDIR /app
ENV PATH=/node_modules/.bin:$PATH
RUN npm run build

ENV PORT=80
ENV HOST=0.0.0.0
ENV BROWSER='none'

EXPOSE 80

CMD npm run start:server
