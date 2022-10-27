package com.example.stylejob;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StyleJobApplication {

    public static void main(String[] args) {
        SpringApplication.run(StyleJobApplication.class, args);
    }

    Job newjob = new Job();
}
