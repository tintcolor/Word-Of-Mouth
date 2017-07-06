package com.ant.spring.wom.v2.controller;

import com.ant.spring.wom.domain.Jobs;
import com.ant.spring.wom.repository.JobRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

/**
 * Created by anthonyjones on 7/5/17.
 */
@RestController
public class JobsController {

    @Inject
    private JobRepository jobRepository;

    @RequestMapping(value = "/job/{job}", method = RequestMethod.GET)
    @CrossOrigin
    public ResponseEntity<Iterable<Jobs>> getAllJobs(@PathVariable String job) {

        List listOfJobs = new ArrayList<>();

//        jobRepository
//                .findAll()
//                .forEach(item -> Stream.of(item)
//                        .filter(item2 -> item2.getJob().toLowerCase().contains(job))
//                        .forEach(item3 -> listOfJobs.add(item3.getJob())));


        jobRepository
                .findAll()
                .forEach(item -> Stream.of(item)
                        .filter(item2 -> item2.getJob().toLowerCase().contains(job))
                        .forEach(item3 -> listOfJobs.add(jobRepository.findByJobStartsWith(item3.getJob()))));

        return new ResponseEntity<>(listOfJobs, HttpStatus.OK);
    }
}
