import { Category } from "./category";
export class Mentor {
    employeeId: number = 0;
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    password: string = '';
    jobTitle: string = '';
    company: string = '';
    location: string = '';
    bio: string = '';
    category: Category;
    skills: string[] = [];
    profileImage: number[] = []; // Array of bytes for storing the image as a byte array

    constructor(
        employeeId?: number,
        firstName?: string,
        lastName?: string,
        email?: string,
        password?: string,
        jobTitle?: string,
        company?: string,
        location?: string,
        bio?: string,
        category?: Object,
        skills?: string[],
        profileImage?: number[] // Initialize as an empty array
    ) {
        this.employeeId = employeeId || 0;
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.email = email || '';
        this.password = password || '';
        this.jobTitle = jobTitle || '';
        this.company = company || '';
        this.location= location || '';
        this.bio = bio || '';
        this.category = new Category();
        this.skills = skills || [];
        this.profileImage = profileImage || [];
    }
}
