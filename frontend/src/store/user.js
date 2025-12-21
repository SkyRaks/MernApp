import {create} from "zustand";

export const useUserStore = create((set) => (
    {
    user: [],
    setUser: (user) => set({user}),

    createUser: async (newUser) => {
        if (!newUser.name || !newUser.email || !newUser.password) {
            return {success: false, message: "please fill in all fields"}
        }

        const res = await fetch("/api/auth/register", {
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(newUser)
        })

        return {success: true, message: "user created successfully"}
    },

    loginUser: async (credentials) => {
        if (!credentials.email || !credentials.password) return {success: false, message: "please fill in all fields"}  

        const res = await fetch("/api/auth/login", {
            method:"POST",
            headers:{
                "Content-type":"application/json"  
            },
            body:JSON.stringify(credentials)
        })

        const data = await res.json();
        if (!data.success) return {success: false, message: data.message};

        set((state) => (
            {user:[data.data]}
        ))

        return {success: true, message: "you've been logged in!"}
    },
}));
