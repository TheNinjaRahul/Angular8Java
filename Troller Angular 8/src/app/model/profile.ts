export class Profile {
    name: string;
    desc: string;
    imagePath: string;
    id: string;

    constructor(id: string, name: string, desc: string, imagePath: string) {
        console.log(id,name,desc,imagePath)
        this.name = name;
        this.id = id;
        this.desc = desc;
        this.imagePath = imagePath;
    }
}