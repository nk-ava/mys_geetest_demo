package pm.geetest.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {

    @GetMapping("/verification")
    public String verify(){
        return "/index.html";
    }

}

