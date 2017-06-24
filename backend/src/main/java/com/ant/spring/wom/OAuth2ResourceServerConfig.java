package com.ant.spring.wom;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;

/**
 * Created by anthonyjones on 6/22/17.
 */
@Configuration
@EnableResourceServer
public class OAuth2ResourceServerConfig extends ResourceServerConfigurerAdapter {

    @Override
    public void configure(ResourceServerSecurityConfigurer resources) {
        resources.resourceId("WordOfMouth_Resources");
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http

                .requestMatchers().antMatchers("/oauth2/v2/users/**")
                .and()
                .authorizeRequests().antMatchers("/oauth2/v2/user2/**").authenticated();

    }
}