package com.cognizant.springlearn.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(CountryController.class)
class CountryControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    void countryReturnsIndiaAsJson() throws Exception {
        mockMvc.perform(get("/country"))
                .andExpect(status().isOk())
                .andExpect(content().json("{\"code\":\"IN\",\"name\":\"India\"}"));
    }
}
