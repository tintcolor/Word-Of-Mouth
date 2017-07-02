//package com.ant.spring.wom.domain;
//
//import javax.persistence.*;
//import java.util.Set;
//
///**
// * Created by anthonyjones on 7/2/17.
// */
//@Entity
//@Table(name="FRIEND")
//public class Friend {
//
//    private long friendId;
//    private String friendName;
//    private Set<User> user;
//
//    public Friend(String name){
//        this.friendName = name;
//    }
//
//    public Friend(String name, Set<User> users){
//        this.friendName = name;
//        this.user = users;
//    }
//
//    @ManyToMany(mappedBy = "friends")
//    public Set<User> getUsers() {
//        return user;
//    }
//
//    public void setUsers(Set<User> users) {
//        this.user = users;
//    }
//
//    @Id
//    @GeneratedValue
//    @Column(name="FRIEND_ID")
//    public long getFriendId() {
//        return this.friendId;
//    }
//
//    public void setFriendId(long friendId) {
//        this.friendId = friendId;
//    }
//
//    @Column(name="FRIEND_NAME", nullable=false)
//    public String getFriendName() {
//        return this.friendName;
//    }
//
//    public void setFriendName(String friendName) {
//        this.friendName = friendName;
//    }
//}
