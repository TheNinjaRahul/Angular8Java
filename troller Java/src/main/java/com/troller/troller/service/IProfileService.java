package com.troller.troller.service;

import com.troller.troller.model.Profile;

import java.util.List;

public interface IProfileService {
    public List<Profile> getAllProfile();
    public Profile updateProfile(int id,String desc);
    public boolean deleteProfile(int id);
    public boolean setAllProfile();
}
