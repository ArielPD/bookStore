package com.apd.bookstore.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Collections;

import static springfox.documentation.builders.PathSelectors.regex;

@EnableWebMvc
@Configuration
@EnableSwagger2
public class SwaggerConfig {

    @Bean
    public Docket bookStoreApiDocket() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.apd.bookstore.controller"))
                .paths(regex("/.*"))
                .build()
                .apiInfo(apiMetaData());
    }

    private ApiInfo apiMetaData() {
        return new ApiInfo(
                "Book Store REST API",
                "All api for book store application",
                "1.0",
                "term and condition url",
                new Contact(
                        "BookStore Admin",
                        "http://localhost.com",
                        "test@gmail.com"
                ),
                "book store license",
                "license url",
                Collections.emptyList()
        );
    }
}
