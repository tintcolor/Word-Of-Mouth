package com.ant.spring.wom.repository;

import com.ant.spring.wom.domain.Jobs;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by anthonyjones on 7/5/17.
 */
public interface JobRepository extends CrudRepository<Jobs, Long> {
    Jobs findAllByJobStartsWith(String job);
    Jobs findByJobStartingWith(String job);
    Jobs findByJobStartsWith(String job);


}
