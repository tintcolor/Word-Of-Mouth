package com.ant.spring.wom.repository;

import com.ant.spring.wom.domain.Gigs;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by anthonyjones on 6/25/17.
 */
public interface GigRepository extends CrudRepository<Gigs, Long> {
    Gigs findBySeeking(String positionSoughtFor);
}
