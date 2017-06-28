package com.ant.spring.wom.domain;

import com.ant.spring.wom.repository.UserRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
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

    public void initDatabase() {

//        userRepository.findByUsername("mickey@disney.com").setPassword(this.passwordEncoder.encode("admin"));//.setPassword(passwordEncoder.encode(userRepository.findByUsername("mickey@disney.com").getPassword()));

//        database.keySet().iterator().
//                forEachRemaining(username -> database.get(username)
//                        .setPassword(passwordEncoder.encode(userRepository.findByUsername(username).getPassword())));
//        database.keySet().iterator().
//                forEachRemaining(username -> System.out.println(username));
//        System.out.println("Asdf");
//        System.out.println(userRepository.findByUsername("mickey").getUsername());
        userRepository.findAll().forEach(item -> database.put(item.getUsername(), item));
        database.get("mickey").setPassword(passwordEncoder.encode(userRepository.findByUsername("mickey").getPassword()));
        database.get("leo").setPassword(passwordEncoder.encode(userRepository.findByUsername("leo").getPassword()));

    }

    public void save(User user) {
        this.database.put(user.getUsername(), user);
    }

    public boolean usernameExists(String username) {
        return this.database.containsKey(username);
    }


}