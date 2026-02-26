import { Navigate } from "react-router-dom";
import { getSession } from "../auth/auth";

export default function ProtectedRoute({ role, children }) {
  const session = getSession();

  if (!session) return <Navigate to="/auth/login" replace />;

  if (role && session.role !== role) {
    // if logged in but wrong role, send to their dashboard
    return <Navigate to={session.role === "admin" ? "/admin" : "/student"} replace />;
  }

  return children;
}