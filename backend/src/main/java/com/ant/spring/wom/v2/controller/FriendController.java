//package com.ant.spring.wom.v2.controller;
//
//import com.ant.spring.wom.domain.Friend;
//import com.ant.spring.wom.repository.FriendRepository;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RestController;
//
//import javax.inject.Inject;
//
///**
// * Created by anthonyjones on 7/2/17.
// */
//@RestController
//public class FriendController {
//
//
//
//    @Inject
//    private FriendRepository friendRepository;
//
//
//    @RequestMapping(value = "/friend", method = RequestMethod.GET)
//    @CrossOrigin
//    public ResponseEntity<Iterable<Friend>> getAllGigs() {
//        Iterable<Friend> allGigs = friendRepository.findAll();
//        return new ResponseEntity<>(allGigs, HttpStatus.OK);
//    }
//
//}
