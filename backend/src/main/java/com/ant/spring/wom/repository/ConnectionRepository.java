package com.ant.spring.wom.repository;

import com.ant.spring.wom.domain.Connection;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by anthonyjones on 7/2/17.
 */
public interface ConnectionRepository extends CrudRepository<Connection, Long> {

    Connection findByUserID(Long id);


}
