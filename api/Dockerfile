FROM ubuntu:14.04

RUN apt-get update -y && apt-get upgrade -y
RUN apt-get install openjdk-8-jdk -y

COPY target/api-standalone.jar .

CMD java -jar api-standalone.jar

