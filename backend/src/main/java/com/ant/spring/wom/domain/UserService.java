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
//        userRepository.findAll().forEach(item -> System.out.println(item));
//        userRepository.findAll().forEach(item -> System.out.println(item.getUsername()+" " +item));

//        userRepository.findAll().iterator().forEachRemaining(item -> item.setPassword(passwordEncoder.encode(item.getPassword())));

        userRepository.findAll().forEach(item -> database.put(item.getUsername(), item));
//        userRepository.findByUsername("mickey@disney.com").setPassword(this.passwordEncoder.encode("admin"));//.setPassword(passwordEncoder.encode(userRepository.findByUsername("mickey@disney.com").getPassword()));

//        database.keySet().iterator().
//                forEachRemaining(username -> database.get(username)
//                        .setPassword(passwordEncoder.encode(userRepository.findByUsername(username).getPassword())));
//        database.keySet().iterator().
//                forEachRemaining(username -> System.out.println(username));

        database.get("mickey").setPassword(passwordEncoder.encode(userRepository.findByUsername("mickey").getPassword()));
        System.out.println(database.size() + " HERE");
        System.out.println(database.get("admin").getPassword());
        System.out.println(userRepository.count());


    }

    public void save(User user) {
        this.database.put(user.getUsername(), user);
    }

    public boolean usernameExists(String username) {
        return this.database.containsKey(username);
    }


}
