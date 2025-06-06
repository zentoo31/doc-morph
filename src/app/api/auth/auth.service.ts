import UserSchema from "../schemas/user";
import bcrypt from "bcrypt";

export class AuthService{
    static async registerUser (email: string, password: string){
        const existingUser = await UserSchema.findOne({email});
        if(existingUser) throw new Error("User already exists");

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserSchema({
            email,
            password: hashedPassword
        });

        await newUser.save();
        return newUser;
    }
}