package com.troller.troller.model;

public class Profile {
    private int id;
    private String name;
    private String desc;
    private String imagePath;

       public Profile(int i, String name, String desc, String imagePath) {
        this.name = name;
        this.desc = desc;
        this.imagePath = imagePath;
        this.id=i;
    }

    public String getName() {
        return name;
    }



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    @Override
    public String toString() {
        return "Profile{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", desc='" + desc + '\'' +
                ", imagePath='" + imagePath + '\'' +
                '}';
    }
}
