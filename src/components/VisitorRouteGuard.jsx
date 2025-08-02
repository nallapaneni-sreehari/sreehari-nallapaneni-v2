import { useParams, Navigate } from "react-router-dom";
import VisitorTable from "./VisitorsTable";

export default function VisitorRouteGuard() {
  const { param } = useParams();

  if (param === "iamsreehari.in") {
    return <VisitorTable />;
  }

  // Redirect to home or 404 or wherever
  return <Navigate to="/" replace />;
}
