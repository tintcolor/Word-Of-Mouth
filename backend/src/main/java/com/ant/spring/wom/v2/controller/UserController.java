package com.ant.spring.wom.v2.controller;

import com.ant.spring.wom.domain.User;
import com.ant.spring.wom.domain.UserService;
import com.ant.spring.wom.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.security.Principal;


/**
 * Created by anthonyjones on 6/24/17.
 */
@RestController
public class UserController {

    @Inject
    private UserRepository userRepository;

    @Inject
    UserService userService;


    @RequestMapping(value = "/users", method = RequestMethod.GET)
    @CrossOrigin
    public ResponseEntity<Iterable<User>> getAllUsers() {
        Iterable<User> allUsers = userRepository.findAll();
        userService.displayAll();
//        Iterable<User> asd =
//        System.out.println(allUsers);
//        System.out.println(userService.displayAll());
        return new ResponseEntity<>(allUsers, HttpStatus.OK);
    }


    @RequestMapping(value = "/user", method = RequestMethod.GET)
    @CrossOrigin
    public Object currentUserName(Principal principal, HttpServletResponse http) {

        Iterable<User> allUsers = userRepository.findAll();
//        Iterable<User> asd =
//        System.out.println(allUsers);

        SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String user = principal.getName();
//        System.out.println(user);
        User currentUser = userRepository.findOne(userRepository.findByUsername(user).getUserID());
        if (currentUser == null) {
            return null;
        } else {
            http.addHeader("content-type", "application/json charset=UTF-8");
            http.setContentType("application/json");
            User g = userRepository.findByUsername(user);
            return new ResponseEntity<>(currentUser, HttpStatus.OK);
        }
    }

    //
//
    @RequestMapping(value = "/alteruser", method = RequestMethod.PUT)
    @CrossOrigin
    public ResponseEntity<Void> createUser(@RequestBody User newUser) {


        System.out.println(userService.lookup(newUser.getUsername()).getUsername() + " HERE");
        System.out.println(userService.lookup(newUser.getUsername()).getUserID() + " ID HERE");
//        System.out.println(newUser.getUsername() + " HERE");
//        System.out.println( userRepository.findOne(newUser.getGigID()));
//        userRepository.save(userRepository.findOne(newUser.getGigID()));
//        userRepository.findOne(userService.lookup(newUser.getUsername()).getGigID());
//        userService.lookup(newUser.getUsername());
//        System.out.println(newUser.getMainJob());
        userService.put(newUser);
//        userRepository.save(newUser);
//        System.out.println(newUser.getMainJob());
        userService.displayAll();
        System.out.println(userService.lookup(newUser.getUsername()).getMainJob() + " STRING HERE");


//        userRepository.save(newUser);
//        System.out.println(newUser.getUsername() + " THis??");
//        System.out.println(newUser.getGigID()+ " HERE");
//        System.out.println();


        return new ResponseEntity<>(HttpStatus.CREATED);

    }


}