package com.ant.spring.wom.v1.controller;

import com.ant.spring.wom.com.ant.spring.wom.repository.UserRepository;
import com.ant.spring.wom.domain.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;

/**
 * Created by anthonyjones on 6/22/17.
 */
@RestController("userControllerv1")
@RequestMapping(value = "/v1/")
public class UserController {

    @Inject
    private UserRepository userRepository;

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public ResponseEntity<Iterable<User>> getAllUsers(){
        Iterable<User> allUsers = userRepository.findAll();
        return new ResponseEntity<>(allUsers, HttpStatus.OK);
    }
}
