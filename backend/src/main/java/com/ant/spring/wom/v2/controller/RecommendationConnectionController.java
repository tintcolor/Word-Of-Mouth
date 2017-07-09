package com.ant.spring.wom.v2.controller;

import com.ant.spring.wom.domain.RecommendationConnection;
import com.ant.spring.wom.repository.GigRepository;
import com.ant.spring.wom.repository.RecommendationConnectionRepository;
import com.ant.spring.wom.repository.UserRepository;
import org.h2.jdbc.JdbcSQLException;
import org.hibernate.engine.jdbc.spi.SqlExceptionHelper;
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

/**
 * Created by anthonyjones on 7/4/17.
 */
@RestController
public class RecommendationConnectionController {

    @Inject
    private RecommendationConnectionRepository recoConnRepo;

    // @Inject
    //private GigRepository gigRepository;

    @Inject
    private UserRepository userRepository;


    @RequestMapping(value = "/recommendations", method = RequestMethod.GET)
    @CrossOrigin
    public ResponseEntity<Iterable<RecommendationConnection>> getAllGigs() {
        Iterable<RecommendationConnection> allGigs = recoConnRepo.findAll();
        return new ResponseEntity<>(allGigs, HttpStatus.OK);
    }

    @RequestMapping(value = "/recommendations/{id}", method = RequestMethod.GET)
    @CrossOrigin
    public ResponseEntity<?> getRecommendations(@PathVariable Long id) {
        ArrayList arrayListOfRecommendations = new ArrayList<>();
        for (int i = 1; i <= recoConnRepo.count(); i++) {
            if (recoConnRepo.findOne((long) i).getGigID().equals(id)) {
                arrayListOfRecommendations.add(userRepository.findOne(recoConnRepo.findOne((long) i).getUserID()));
            }
        }
        return new ResponseEntity<>(arrayListOfRecommendations, HttpStatus.OK);
    }

    @RequestMapping(value = "/recommendgig", method = RequestMethod.POST)
    @CrossOrigin
    public ResponseEntity<?> recommendGig(@Valid @RequestBody RecommendationConnection recommend) {


        recommend.setId(recoConnRepo.count() + 1);
        recommend = recoConnRepo.save(recommend);

        HttpHeaders responseHeaders = new HttpHeaders();
        URI newRecommendationUri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(recommend.getId())
                .toUri();
        responseHeaders.setLocation(newRecommendationUri);


        return new ResponseEntity<>(recommend, HttpStatus.CREATED);
    }


}
