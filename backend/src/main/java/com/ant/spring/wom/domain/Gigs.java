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
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "GIG_ID")
    private Long id;

    private Date date;

    private String seeking;

    private String description;

    private String rate;

    private String location;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
