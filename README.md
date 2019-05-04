## Web-Tools

- Database startup:
    To start MongoDB you'll need Docker and Docker-Compose to be installed.
    Then in the `...\Tools` execute `docker-compose up -d`.
    Voila, Mongo is up and running. 

- Docker run:
    To start app in docker use this two commands
   `docker build -t webtools -f Dockerfile .`
   `docker run -i -p 3000:3000 -t webtools`