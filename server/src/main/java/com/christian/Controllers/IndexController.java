package com.christian.Controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController {

	@RequestMapping(method = RequestMethod.GET, value = "/")
	public String hello() {
		return "Hello World";
	}
}
