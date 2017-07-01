package com.ant.spring.wom.domain;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Set;

/**
 * Created by anthonyjones on 6/30/17.
 */
@Entity
@Table(name = "CONNECTION")
public class Connection {

    @Id
    @Column(name = "CONNECTIONID")
    private Long id;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "CONNECTIONID")
    @Size(min=2,max=6)
    private Set<User> userid;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<User> getUserid() {
        return userid;
    }

    public void setUserid(Set<User> userid) {
        this.userid = userid;
    }
}
