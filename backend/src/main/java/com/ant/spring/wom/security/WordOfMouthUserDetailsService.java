package com.ant.spring.wom.security;

import com.ant.spring.wom.domain.User;
import com.ant.spring.wom.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by anthonyjones on 6/23/17.
 */
@Component
public class WordOfMouthUserDetailsService implements UserDetailsService {

    @Inject
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);

        if(user == null){
            throw new UsernameNotFoundException(String.format("The username %s doesn't exist", username));
        }

        List<GrantedAuthority> authorities = new ArrayList<>();
        if(user.isAdmin()){
            authorities = AuthorityUtils.createAuthorityList("ROLE_ADMIN");
        }
        UserDetails userDetails = new org.springframework.security.core.userdetails
                .User(user.getUsername(), user.getPassword(), authorities);

        return userDetails;
    }
}
