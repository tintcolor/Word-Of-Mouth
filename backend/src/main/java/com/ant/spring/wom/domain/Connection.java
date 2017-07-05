package com.ant.spring.wom.domain;

import javax.persistence.*;

/**
 * Created by anthonyjones on 7/2/17.
 */
@Entity
public class Connection {

    @Id
    @Column(name = "ID")
    private Long id;

    @Column(name = "USERID1")
    private Long userID;

    @Column(name = "USERID2")
    private Long friendID;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public Long getFriendID() {
        return friendID;
    }

    public void setFriendID(Long friendID) {
        this.friendID = friendID;
    }
}
