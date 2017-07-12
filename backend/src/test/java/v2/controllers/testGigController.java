package v2.controllers;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

import com.ant.spring.wom.WordOfMouthApplication;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.context.WebApplicationContext;

import javax.inject.Inject;

/**
 * Created by anthonyjones on 6/22/17.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = WordOfMouthApplication.class)
@WebAppConfiguration
public class testGigController {

    @Inject
    private WebApplicationContext webApplicationContext;

    private MockMvc mockMvc;

    @Before
    public void setup() {
        mockMvc = webAppContextSetup(webApplicationContext).build();
    }

    @Test
    public void testGetAllGigs() throws Exception {
        mockMvc.perform(get("/gigs"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(4)));
    }


    @Test// Don't know how to test this yet
    public void testGetOneUser() throws Exception {



        mockMvc.perform(post("/postgig"))

//                .andExpect(status().isCreated()).andExpect(jsonPath("$", ha))
                .andExpect(jsonPath("$", hasSize(4)));
    }


    @Test
    public void testGetAllOtherUsers() throws Exception {
        mockMvc.perform(get("/users/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(3)));
    }
}