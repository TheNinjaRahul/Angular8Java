package com.troller.troller.controller;

import com.troller.troller.model.Profile;

import java.util.List;
import java.util.Map;

public interface IProfileController {
    public List<Profile> getAllProfile();
    public Profile updateProfile(Map<String,String> allParams);
    public boolean deleteProfile(String id);
}
