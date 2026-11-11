package com.example.demo.controller;

import com.example.demo.repository.TruckRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/trucks")
public class TruckController {

    private final TruckRepository truckRepository;

    public TruckController(TruckRepository truckRepository) {
        this.truckRepository = truckRepository;
    }

    @GetMapping
    public List<Map<String, Object>> getTrucks(
            @RequestParam(defaultValue = "2026-05-20") String date) {

        return truckRepository.getTrucksByDate(date);
    }
}