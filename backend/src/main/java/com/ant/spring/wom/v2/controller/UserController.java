package com.ant.spring.wom.v2.controller;

import com.ant.spring.wom.repository.UserRepository;
import com.ant.spring.wom.domain.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.servlet.http.HttpServletResponse;
import java.security.Principal;

/**
 * Created by anthonyjones on 6/22/17.
 */
//@RestController("userControllerv2")
//@RequestMapping({"/v2/", "/oauth2/v2/"})
//@RequestMapping(value="/v2/")
//@CrossOrigin(origins = "http://localhost:8100")
public class UserController {

    @Inject
    private UserRepository userRepository;

//    @RequestMapping(value = "/users", method = RequestMethod.GET)
//    public ResponseEntity<Iterable<User>> getAllUsers() {
//        Iterable<User> allUsers = userRepository.findAll();
//        return new ResponseEntity<>(allUsers, HttpStatus.OK);
//    }
//
//    @RequestMapping(value = "/user", method = RequestMethod.GET)
//    @ResponseBody
//    public Object currentUserName(Principal principal,HttpServletResponse http) {
//        SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//
//        String user = principal.getName();
//        User currentUser = userRepository.findOne(userRepository.findByUsername(user).getId());
//        User g = userRepository.findByUsername(user);
//
//        return new ResponseEntity<>(currentUser, HttpStatus.OK);
//    }

    @RequestMapping(value = "/userd", method = RequestMethod.GET)
    @ResponseBody
    public Object currentd(Authentication authentication) {

        return authentication.getPrincipal();
    }
}