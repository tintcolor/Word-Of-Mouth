package com.ant.spring.wom.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Type;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;

/**
 * Created by anthonyjones on 6/22/17.
 */
@Entity
@Table(name = "USERS")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "USER_ID")
    private Long id;

    @Column(name = "USERNAME")
    @NotEmpty
    private String username;

    @Column
    @NotEmpty
    @JsonIgnore
    private String password;

    @Column(name = "FIRST_NAME")
    @NotEmpty
    private String firstName;

    @Column(name = "LAST_NAME")
    @NotEmpty
    private String lastName;

    @Column(name = "MAIN_JOB")
    @NotEmpty
    private String mainJob;

    @Column(name = "SIDE_JOB")
    @NotEmpty
    private String sideJob;

    @Column(name = "RATING")
    @NotEmpty
    private Integer rating;

    @Column(name = "PHOTO")
    @NotEmpty
    private String photo;

    @Column(name = "ADMIN", columnDefinition = "char(3)")
    @Type(type = "yes_no")
    @NotEmpty
    private boolean admin;

    //    @Column(name = "REVIEWS")
//    @NotEmpty
//    @JsonIgnore
//    private ArrayList<String> reviews;


//    @Column(name = "TALENTS")
//    @NotEmpty
//    @JsonIgnore
//    private ArrayList<String> talents;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public boolean isAdmin() {
        return admin;
    }

    public void setAdmin(boolean admin) {
        this.admin = admin;
    }

//    public ArrayList<String> getTalents() {
//        return talents;
//    }
//
//    public void setTalents(ArrayList<String> talents) {
//        this.talents = talents;
//    }

    public String getMainJob() {
        return mainJob;
    }

    public void setMainJob(String mainJob) {
        this.mainJob = mainJob;
    }

    public String getSideJob() {
        return sideJob;
    }

    public void setSideJob(String sideJob) {
        this.sideJob = sideJob;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

//    public ArrayList<String> getReviews() {
//        return reviews;
//    }
//
//    public void setReviews(ArrayList<String> reviews) {
//        this.reviews = reviews;
//    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }
}
