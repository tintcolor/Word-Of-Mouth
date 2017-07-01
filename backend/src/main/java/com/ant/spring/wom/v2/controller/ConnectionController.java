package com.ant.spring.wom.v2.controller;

import com.ant.spring.wom.domain.Connection;
import com.ant.spring.wom.domain.User;
import com.ant.spring.wom.repository.ConnectionRepository;
import com.ant.spring.wom.repository.UserRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Arrays;

/**
 * Created by anthonyjones on 6/30/17.
 */
@RestController
public class ConnectionController {


    @Inject
    private ConnectionRepository connectionRepository;

    @Inject
    private UserRepository userRepository;

    User user;


//    @RequestMapping(value = "/usersconnections", method = RequestMethod.GET)
//    @CrossOrigin
//    public ResponseEntity<Iterable<Connection>> getAllUsers(@PathVariable Long id) {
//        Iterable<Connection> allUsers = connectionRepository.findAll();
//        connectionRepository.findOne(id);
//
//        return new ResponseEntity<>(allUsers, HttpStatus.OK);
//    }

    @RequestMapping(value = "/usersconnections/{id}", method = RequestMethod.GET)
    @CrossOrigin
    public ResponseEntity<Connection> getOneUser(@PathVariable Long id) {

//        userRepository.findOne(id).
//        Iterable<Connection> allUsers = connectionRepository.findAll();
//        User findTwo= connectionRepository.findByCONNECTIONIDContaining(id);
        // this should get see if users

//        Arrays.asList(a).contains(id);

        System.out.println(userRepository.findOne(1L).getConnectionid().contains(Long.toString(id)));

        userRepository.findAll().forEach(item -> System.out.println(Arrays.asList(item.getConnectionid().contains(Long.toString(id)))));

//        if (userRepository.findAll().iterator().forEachRemaining(item -> Arrays.asList(item.getConnectionid().contains(Long.toString(id)))))
//        {
//
//        }

        Connection findOne=null;

        if(userRepository.findOne(1L).getConnectionid().contains(Long.toString(id))){


            System.out.println(userRepository.findOne(1L).getConnectionid()+ " Before");

            userRepository.findOne(1L).setConnectionid(Long.toString(1));

            System.out.println(userRepository.findOne(1L).getConnectionid()+ " After");

            findOne = connectionRepository.findOne(id);
//                findOne = connectionRepository.findOne(id);
            System.out.println("YES");
        }

        for (int i = 0; i < userRepository.count(); i++) {


        }


//        Connection findOne = connectionRepository.findOne(id);

        return new ResponseEntity<>(findOne, HttpStatus.OK);
    }


}
