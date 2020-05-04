package com.troller.troller.controller;

import com.troller.troller.model.Profile;
import com.troller.troller.service.IProfileService;
import jdk.nashorn.internal.ir.RuntimeNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProfileController implements IProfileController{

    @Autowired
    IProfileService iProfileService;

    @RequestMapping(value = "/getAllProfile",method = RequestMethod.GET)
    public List<Profile> getAllProfile(){
        return iProfileService.getAllProfile();
    }

    @RequestMapping(value = "/updateProfile",method = RequestMethod.PUT)
    public Profile updateProfile(@RequestParam Map<String,String> allParams){
        System.out.println(allParams);
        String id=allParams.get("id");
        String desc=allParams.get("desc");
        System.out.println("id:"+id);
        System.out.println("desc:"+desc);
        Integer i=Integer.parseInt(id);
        return iProfileService.updateProfile(i,desc);
    }

    @RequestMapping(value = "/deleteProfile",method = RequestMethod.DELETE)
    public boolean deleteProfile(String id){
        Integer i=Integer.parseInt(id);
        return iProfileService.deleteProfile(i);
    }

    @RequestMapping(value = "/setAllProfile",method = RequestMethod.GET)
    public boolean setAllProfile(){
        return iProfileService.setAllProfile();
    }
}
