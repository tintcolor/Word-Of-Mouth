//package com.ant.spring.wom.domain;
//
//import javax.persistence.*;
//import java.util.HashSet;
//import java.util.Set;
//
///**
// * Created by anthonyjones on 7/2/17.
// */
//@Entity
////@Table(name="FRIEND")
//public class Friend {
//
//    private static final long serialVersionUID = 1L;
//
//    @Id
//    @GeneratedValue
//    @Column(name = "FRIENDID")
//    private long friendID;
//
//    @Column(name = "FRIENDNAME")
//    private String friendName;
//
//    @ManyToMany(mappedBy="friends")//THIS LOOKS FOR THE MAPPED BY REFERENCE
//    private Set<User> users = new HashSet<User>();
//
//    public Friend() {
//        super();
//    }
//
//    public Friend(String friendName) {
//        this.friendName = friendName;
//    }
//
//
//    public long getFriendID() {
//        return friendID;
//    }
//
//    public void setFriendID(long friendID) {
//        this.friendID = friendID;
//    }
//
//    public String getFriendName() {
//        return friendName;
//    }
//
//    public void setFriendName(String friendName) {
//        this.friendName = friendName;
//    }
//
//    public Set<User> getUsers() {
//        return users;
//    }
//
//    public void setUsers(Set<User> users) {
//        this.users = users;
//    }
//}
