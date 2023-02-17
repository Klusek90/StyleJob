FROM openjdk:8-alpine
VOLUME /tmp
COPY build/libs/[filename].jar app.jar
ENV JAVA_OPTS="-Xmx64m"
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar app.jar" ]
