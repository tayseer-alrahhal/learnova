import { z } from 'zod';


export const LoginSchema = z.object({
    email: z.string().email("Please enter your email to sign in 📧"),
    password: z.string().min(8, "Password must be at least 6 characters long ⚠️").nonempty("Your password is required to continue 🔒")
})


export const RegisterSchema = z.object({
    name: z.string().min(2, "Your full name is required to proceed 📝"),
    email: z.string().email("Please enter a valid email address ❗"),
    password: z.string().min(8, "Password must be at least 6 characters long ⚠️").nonempty("A secure password is required to continue 🔒"),
    role: z.enum(["student", "teacher"], {
        errorMap: () => ({ message: "Please select a valid role (student or teacher) 👨‍🎓👩‍🏫" })
    })
}) 