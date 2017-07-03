package com.ant.spring.wom.v2.controller;

import com.ant.spring.wom.domain.Connection;
import com.ant.spring.wom.repository.ConnectionRepository;
import com.ant.spring.wom.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.inject.Inject;
import javax.validation.Valid;
import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.Stream;

/**
 * Created by anthonyjones on 7/2/17.
 */
@RestController
public class ConnectionController {


    @Inject
    private ConnectionRepository connectionRepository;

    @Inject
    private UserRepository userRepository;


    @RequestMapping(value = "/connection", method = RequestMethod.GET)
    @CrossOrigin
    public ResponseEntity<Iterable<Connection>> getAllGigs() {
        Iterable<Connection> allGigs = connectionRepository.findAll();
        return new ResponseEntity<>(allGigs, HttpStatus.OK);
    }


    @RequestMapping(value = "/connection/{id}", method = RequestMethod.GET)
    @CrossOrigin
    public ResponseEntity<?> getMyFriends(@PathVariable Long id) {
        ArrayList arrayListOfFriends = new ArrayList<>();
        for (int i = 1; i <= connectionRepository.count(); i++) {
            if (connectionRepository.findOne((long) i).getUserID().equals(id)) {
                arrayListOfFriends.add(userRepository.findOne(connectionRepository.findOne((long) i).getFriendID()));
            }
        }

        return new ResponseEntity<>(arrayListOfFriends, HttpStatus.OK);
    }

    //For now, friending a person automatically friends them to you as well
    @RequestMapping(value = "/connection", method = RequestMethod.POST)
    @CrossOrigin
    public ResponseEntity<?> addAFriend(@Valid @RequestBody Connection newFriend) {

        newFriend.setId(connectionRepository.count() + 1);
        newFriend = connectionRepository.save(newFriend);

        reverseFriendship(newFriend);

        HttpHeaders responseHeaders = new HttpHeaders();
        URI newPollUri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(newFriend.getId())
                .toUri();
        responseHeaders.setLocation(newPollUri);
//        connectionRepository.findAll().forEach(item -> System.out.println(item.getId()));


        return new ResponseEntity<>(responseHeaders, HttpStatus.CREATED);
    }

    //This most likely wont be here in the future
    private void reverseFriendship(Connection newFriendshipFlipped) {

        Connection flippedConnection = new Connection();

        try {
            flippedConnection.setId(connectionRepository.count() + 1);
            Long changeID = newFriendshipFlipped.getUserID();
            flippedConnection.setUserID(newFriendshipFlipped.getFriendID());
            flippedConnection.setFriendID(changeID);
            connectionRepository.save(flippedConnection);

        } catch (DataIntegrityViolationException e) {
            System.out.println("This connection already Exist " + e);
        }


    }

}
