FROM ubuntu:14.04

RUN apt-get update -y && apt-get upgrade -y
RUN apt-get install openjdk-7-jdk -y

COPY ./target/api-standalone.jar .

EXPOSE 3000

CMD java -jar api-standalone.jar

