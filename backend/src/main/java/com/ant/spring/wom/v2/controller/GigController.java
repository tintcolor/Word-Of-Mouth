package com.ant.spring.wom.v2.controller;


import com.ant.spring.wom.domain.Gigs;
import com.ant.spring.wom.domain.User;
import com.ant.spring.wom.repository.GigRepository;
import com.ant.spring.wom.repository.UserRepository;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.inject.Inject;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.net.URI;
import java.security.Principal;

/**
 * Created by anthonyjones on 6/25/17.
 */
@RestController
public class GigController {

    @Inject
    private GigRepository gigRepository;


    @RequestMapping(value = "/gigs", method = RequestMethod.GET)
    @CrossOrigin
    public ResponseEntity<Iterable<Gigs>> getAllGigs() {
        Iterable<Gigs> allGigs = gigRepository.findAll();
        return new ResponseEntity<>(allGigs, HttpStatus.OK);
    }


    @RequestMapping(value = "/postgig", method = RequestMethod.POST)
    @CrossOrigin
    public ResponseEntity<Void> createGig(@RequestBody Gigs newPostGig) {

//        System.out.println(newPostGig.getUserID());

        newPostGig = gigRepository.save(newPostGig);



        System.out.println(newPostGig.getDate());
        System.out.println(newPostGig.getDescription());
        System.out.println(newPostGig.getLocation());
        System.out.println(newPostGig.getRate());
        System.out.println(newPostGig.getSeeking());

        System.out.println(newPostGig.getUserID() + " The Id");

        return new ResponseEntity<>(HttpStatus.CREATED);

    }
//
//    @RequestMapping(value = "/postgig/", method = RequestMethod.PUT)
//    @CrossOrigin
//    public ResponseEntity<Void> updateGig(@RequestBody Gigs newPostGig) {
//        newPostGig = gigRepository.save(newPostGig);
////        System.out.println( gigRepository.findBySeeking("asdf").getDate());
//
//
//        return new ResponseEntity<>(HttpStatus.CREATED);
//
//    }


//    @RequestMapping(value = "/gigsforme", method = RequestMethod.GET)
//    @CrossOrigin
//    public Object currentUserName(Principal principal, HttpServletResponse http) {
//        SecurityContextHolder.getContext().getAuthentication().getPrincipal();
////        System.out.println(principal.getName());
//        String user = principal.getName();
//
//        User currentUser = userRepository.findOne(userRepository.findByUsername(user).getUserID());
//        if(currentUser == null){
//            return null;
//        }else {
//            http.addHeader("content-type", "application/json charset=UTF-8");
//            http.setContentType("application/json");
//
//            User g = userRepository.findByUsername(user);
//
//           JsonObject object = new JsonObject("currentUser");
//
//
//            return new ResponseEntity<>(currentUser, HttpStatus.OK);
//        }
//    }

}