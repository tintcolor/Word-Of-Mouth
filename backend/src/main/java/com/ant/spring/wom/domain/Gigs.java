package com.ant.spring.wom.domain;

/**
 * Created by anthonyjones on 6/25/17.
 */

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "GIGS")
public class Gigs {

    @Id
    @Column(name = "GIGID")
    private Long gigID;

    @Column(name = "DATE")
    private Date date;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "LOCATION")
    private String location;

    @Column(name = "RATE")
    private String rate;

    @Column(name = "SEEKING")
    private String seeking;

    @Column(name = "USERID")
    private int userid;

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public Long getGigID() {
        return gigID;
    }

    public void setGigID(Long gigID) {
        this.gigID = gigID;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getSeeking() {
        return seeking;
    }

    public void setSeeking(String seeking) {
        this.seeking = seeking;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getRate() {
        return rate;
    }

    public void setRate(String rate) {
        this.rate = rate;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
