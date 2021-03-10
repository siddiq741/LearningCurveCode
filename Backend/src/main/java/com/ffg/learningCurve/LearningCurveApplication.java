package com.ffg.learningCurve;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class LearningCurveApplication {

	public static void main(String[] args) {
		SpringApplication.run(LearningCurveApplication.class, args);
	}

}
