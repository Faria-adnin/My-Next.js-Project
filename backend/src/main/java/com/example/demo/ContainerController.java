// package com.example.demo;

// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RestController;

// @RestController
// public class ContainerController {

//     @GetMapping("/api/containers")
//     public String getContainers() {

//         return "Container API is working!";

//     }
// }





package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
public class ContainerController {

    @GetMapping("/api/containers")
    public Map<String, Object> getContainers() {

        Map<String, Object> container = Map.of(
            "id", 1,
            "containerNo", "MSCU1234567",   
            "type", "Import",
            "status", "Pending"
        );

        return container;
    }
}
