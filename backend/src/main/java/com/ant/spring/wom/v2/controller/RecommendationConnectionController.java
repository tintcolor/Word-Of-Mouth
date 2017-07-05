package com.ant.spring.wom.v2.controller;

import com.ant.spring.wom.domain.RecommendationConnection;
import com.ant.spring.wom.repository.GigRepository;
import com.ant.spring.wom.repository.RecommendationConnectionRepository;
import com.ant.spring.wom.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.util.ArrayList;

/**
 * Created by anthonyjones on 7/4/17.
 */
@RestController
public class RecommendationConnectionController {

    @Inject
    private RecommendationConnectionRepository recoConnRepo;

    @Inject
    private GigRepository gigRepository;

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
}
