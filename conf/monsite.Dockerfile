# server web pour testé site web html tres rapidement
# tech: python image from docker

FROM python
RUN apt-get update && apt-get install unzip nano iputils-ping -y
#RUN wget URL -O lol.zip
COPY /website /tmp/
COPY /website.zip /tmp/
EXPOSE 7777
ENTRYPOINT [ "python", "-m", "http.server", "7777"]

