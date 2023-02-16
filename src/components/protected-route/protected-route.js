import { useRouter } from "next/router";
import { useEffect } from "react";

export const ProtectedRoute = ({children}) => {
    
    const router = useRouter();

    useEffect(() => {
        if(localStorage.getItem("accessToken") === null) {
            router.push('/auth/login');
        }
    }, []);

    return <>{children}</>

}