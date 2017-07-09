package com.ant.spring.wom.domain;

import com.ant.spring.wom.repository.UserRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Created by anthonyjones on 6/24/17.
 */
@Service
public class UserService {

    @Inject
    private UserRepository userRepository;

    private final Map<String, User> database;

    @Inject
    private PasswordEncoder passwordEncoder;

    private User user;

    public UserService() {
        this.database = new HashMap<>();
    }

    public User lookup(String username) {
        return this.database.get(username);
    }


    public List displayAll() {
        Collections.singleton(database);
        Arrays.asList(database);
        return Arrays.asList(database);
    }



    //USE THIS TO INITIATE ADDING TEMP MEMBERS TO APP
    public void initDatabase() {

//        database.keySet().iterator().
//                forEachRemaining(username -> database.get(username)
//                        .setPassword(passwordEncoder.encode(userRepository.findByUsername(username).getPassword())));
//        database.keySet().iterator().
//                forEachRemaining(username -> System.out.println(username));

        userRepository.findAll().forEach(item -> database.put(item.getUsername(), item));
        database.get("mickey").setPassword(passwordEncoder.encode(userRepository.findByUsername("mickey").getPassword()));
        database.get("minnie").setPassword(passwordEncoder.encode(userRepository.findByUsername("minnie").getPassword()));
        database.get("lucy").setPassword(passwordEncoder.encode(userRepository.findByUsername("lucy").getPassword()));
        database.get("daffy").setPassword(passwordEncoder.encode(userRepository.findByUsername("daffy").getPassword()));

    }

    public void save(User user) {

        this.database.put(user.getUsername(), user);
    }

    public void put(User user) {

        this.database.putIfAbsent(user.getUsername(), user);
    }

    public boolean usernameExists(String username) {
        return this.database.containsKey(username);
    }


}
