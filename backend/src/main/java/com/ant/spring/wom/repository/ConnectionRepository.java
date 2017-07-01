package com.ant.spring.wom.repository;

import com.ant.spring.wom.domain.Connection;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by anthonyjones on 6/30/17.
 */
public interface ConnectionRepository  extends CrudRepository<Connection, Long> {

}
