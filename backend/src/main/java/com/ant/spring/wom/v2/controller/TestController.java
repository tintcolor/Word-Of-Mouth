package com.ant.spring.wom.v2.controller;

import com.ant.spring.wom.domain.User;
import com.ant.spring.wom.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.json.Json;
import javax.json.JsonObject;
import javax.servlet.http.HttpServletResponse;
import java.security.Principal;


/**
 * Created by anthonyjones on 6/24/17.
 */
@RestController
public class TestController {

    @Inject
    private UserRepository userRepository;


    @GetMapping("/public")
    @CrossOrigin
    public String publicService() {
        return "This message is public";
    }

    @GetMapping("/secret")
    @CrossOrigin
    public String secretService() {
        return "A secret message";
    }


    @RequestMapping(value = "/users", method = RequestMethod.GET)
    @CrossOrigin
    public ResponseEntity<Iterable<User>> getAllUsers() {
        Iterable<User> allUsers = userRepository.findAll();
        return new ResponseEntity<>(allUsers, HttpStatus.OK);
    }


    @RequestMapping(value = "/user", method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    @CrossOrigin
    public Object currentUserName(Principal principal, HttpServletResponse http) {
        SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        System.out.println(principal.getName());
        String user = principal.getName();

        User currentUser = userRepository.findOne(userRepository.findByUsername(user).getId());
        if(currentUser == null){
            return null;
        }else {
            http.addHeader("content-type", "application/json");
            http.setContentType("application/json");

            User g = userRepository.findByUsername(user);

//            JsonObject object = new JsonObject("currentUser");


            return new ResponseEntity<>(currentUser, HttpStatus.OK);
        }
    }

}