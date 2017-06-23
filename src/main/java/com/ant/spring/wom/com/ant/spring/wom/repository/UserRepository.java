package com.ant.spring.wom.com.ant.spring.wom.repository;

import com.ant.spring.wom.domain.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by anthonyjones on 6/22/17.
 */
public interface UserRepository extends CrudRepository<User, Long> {
    User findByUsername(String username);
}
