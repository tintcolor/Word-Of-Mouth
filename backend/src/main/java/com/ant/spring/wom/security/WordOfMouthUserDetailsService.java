package com.ant.spring.wom.security;

import com.ant.spring.wom.domain.User;
import com.ant.spring.wom.domain.UserService;
import com.ant.spring.wom.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import javax.inject.Inject;
import java.util.Collections;

/**
 * Created by anthonyjones on 6/23/17.
 */
@Component
public class WordOfMouthUserDetailsService implements UserDetailsService {

//    @Inject
//    private UserRepository userRepository;

    private final UserService userService;

    public WordOfMouthUserDetailsService(UserService userService) {
        this.userService = userService;
    }


//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        User user = userRepository.findByUsername(username);
//
//        if(user == null){
//            throw new UsernameNotFoundException(String.format("The username %s doesn't exist", username));
//        }
//
//        List<GrantedAuthority> authorities = new ArrayList<>();
//        if(user.isAdmin()){
//            authorities = AuthorityUtils.createAuthorityList("ROLE_ADMIN");
//        }
//        UserDetails userDetails = new org.springframework.security.core.userdetails
//                .User(user.getUsername(), user.getPassword(), authorities);
//
//        return userDetails;
//    }

    @Override
    public final UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        final User user = this.userService.lookup(username);
        if (user == null) {
            throw new UsernameNotFoundException("User '" + username + "' not found");
        }

        return org.springframework.security.core.userdetails.User
                .withUsername(username)
                .password(user.getPassword())
                .authorities(Collections.emptyList())
                .accountExpired(false)
                .accountLocked(false)
                .credentialsExpired(false)
                .disabled(false)
                .build();
    }
}
