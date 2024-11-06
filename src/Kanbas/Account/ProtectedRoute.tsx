import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export default function ProtectedRoute({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    return currentUser ? children : <Navigate to="/Kanbas/Account/Signin" />;
}