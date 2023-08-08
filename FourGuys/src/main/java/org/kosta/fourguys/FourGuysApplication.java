package org.kosta.fourguys;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication
@ImportResource("classpath:context.xml")
public class FourGuysApplication {

	public static void main(String[] args) {
		SpringApplication.run(FourGuysApplication.class, args);
	}

}
