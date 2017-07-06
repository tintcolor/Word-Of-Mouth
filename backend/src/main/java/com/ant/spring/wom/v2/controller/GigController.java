package com.ant.spring.wom.v2.controller;


import com.ant.spring.wom.domain.Gigs;
import com.ant.spring.wom.repository.GigRepository;
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
    public ResponseEntity<?> createGig(@Valid @RequestBody Gigs newPostGig) {

        newPostGig.setGigID(gigRepository.count() + 1);
        newPostGig = gigRepository.save(newPostGig);
        gigRepository.save(newPostGig);

        HttpHeaders responseHeaders = new HttpHeaders();
        URI newGigUri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(newPostGig.getGigID())
                .toUri();
        responseHeaders.setLocation(newGigUri);

        return new ResponseEntity<>(responseHeaders, HttpStatus.CREATED);

    }

    @RequestMapping(value = "mygigs/{mainJob}", method = RequestMethod.GET)
    @CrossOrigin
    public ResponseEntity<?> getMyGigs(@PathVariable String mainJob) {
        //Take userID and mainJob, compare userID with gigUserID, if same, do not add to arraylist
        ArrayList arrayListOfGigs = new ArrayList<>();

        String mainJobFormatted = Arrays.toString(mainJob.trim()
                .toLowerCase()
                .split(" "))
                .substring(1)
                .replaceFirst("]", "")
                .replace(", ", "");

        for (int i = 0; i < gigRepository.count() - 1; i++) {
            arrayListOfGigs.add(gigRepository.findBySeeking(mainJobFormatted));
        }

        return new ResponseEntity<>(arrayListOfGigs, HttpStatus.OK);
    }


}