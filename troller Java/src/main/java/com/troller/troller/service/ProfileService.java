package com.troller.troller.service;

import com.troller.troller.model.Profile;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

@Service
public class ProfileService implements IProfileService  {

    ConcurrentHashMap<Integer,Profile> map=new ConcurrentHashMap<>();

    @PostConstruct
    public void setup(){
        System.out.println("PreSetup Called");
        map.put(1,new Profile(1,"Rahul1","I am IT Developer","/assets/images/troll.jpg"));
        map.put(2,new Profile(2,"Rahul2","I am IT Developer","/assets/images/troll.jpg"));
        map.put(3,new Profile(3,"Rahul3","I am IT Developer","/assets/images/troll.jpg"));
        map.put(4,new Profile(4,"Rahul4","I am IT Developer","/assets/images/troll.jpg"));
        map.put(5,new Profile(5,"Rahul5","I am IT Developer","/assets/images/troll.jpg"));
        map.put(6,new Profile(6,"Rahul6","I am IT Developer","/assets/images/troll.jpg"));
        System.out.println(map);
    }

    @Override
    public List<Profile> getAllProfile() {
        List<Profile> list = map.values().stream().collect(Collectors.toList());
        System.out.println(list);
        return list;
    }

    @Override
    public Profile updateProfile(int id,String desc) {
        Profile p=map.get(id);
        p.setDesc(desc);
        return map.put(id,p);
    }

    @Override
    public boolean deleteProfile(int id) {
        Profile p=map.remove(id);
        if(p!=null){
            return true;
        }else{
            return false;
        }
    }

    @Override
    public boolean setAllProfile() {
        setup();
        return true;
    }
}
