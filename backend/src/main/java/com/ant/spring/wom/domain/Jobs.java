package com.ant.spring.wom.domain;

import javax.persistence.*;

/**
 * Created by anthonyjones on 7/5/17.
 */
@Entity
@Table(name="LISTOFJOBS")
public class Jobs {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private Long ID;

    @Column(name = "JOB")
    private String job;


    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }
}
