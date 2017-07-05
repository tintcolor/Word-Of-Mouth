package com.ant.spring.wom.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by anthonyjones on 7/4/17.
 */
@Entity
@Table(name = "RECOMMENDATIONCONNECTION")
public class RecommendationConnection {

    @Id
    @Column(name = "ID")
    private Long id;

    @Column(name = "GIGID")
    private Long gigID;

    @Column(name = "USERID")
    private Long userID;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getGigID() {
        return gigID;
    }

    public void setGigID(Long gigID) {
        this.gigID = gigID;
    }

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

}
