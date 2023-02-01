package com.example.stylejob.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequestMapping("/")
public class RestControl {


    @GetMapping({"/","/home"})
    public String home(){
        return "home";
    }
    @GetMapping("/job")
    public String jobs(){
        return "job";
    }
    @GetMapping("/table")
    public String table(){
        return "table";
    }
}
