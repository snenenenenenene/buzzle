package com.buzzle.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BackendController {
    @GetMapping("/")
    public String index(){
        return  "redirect:/authorize";
    }


    @GetMapping("/authorize")
    public String AuthorizationPage(){
        return "authorize";
    }
}
