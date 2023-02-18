import { useRouter } from "next/router";
import { useEffect } from "react";

export const ProtectedRoute = ({children}) => {
    
    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            if(localStorage.getItem("accessToken") === null) {
              router.push("/auth/login");
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return <>{children}</>

}