package com.ant.spring.wom.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.org.apache.regexp.internal.RE;
import org.hibernate.annotations.Type;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Set;

/**
 * Created by anthonyjones on 6/22/17.
 */
@Entity
@Table(name = "USERS")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private Long id;

    @Column(name = "USERNAME")
    private String username;

    private String name;

    @Column(name = "EMAIL")
    private String email;

    //    @JsonIgnore
    private String password;

    @Column(name = "FIRST_NAME")
    private String firstName;

    @Column(name = "MAIN_JOB")
    private String mainJob;

    @Column(name = "SIDE_JOB")
    private String sideJob;

    @Column(name = "RATING")
    private Integer rating;

    @Column(name = "PHOTO")
    private String photo;

//    @OneToMany(cascade = CascadeType.ALL)
//    @JoinColumn(name = "USER_ID")
//    private Set<Review> reviews;

//    @Column(name = "ADMIN", columnDefinition = "char(3)")
//    @Type(type = "yes_no")
//    @NotEmpty
//    private boolean admin;


//    public Set<Review> getOptions() {
//        return reviews;
//    }
//
//    public void setOptions(Set<Review> options) {
//        this.reviews = options;
//    }


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

//    public boolean isAdmin() {
//        return admin;
//    }
//
//    public void setAdmin(boolean admin) {
//        this.admin = admin;
//    }

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

    public void encodePassword(PasswordEncoder passwordEncoder) {
        this.password = passwordEncoder.encode(this.password);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
