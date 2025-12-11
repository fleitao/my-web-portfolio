import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import richardImage from "@/assets/404-richard.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <img
        src={richardImage}
        alt="Sir Richard with 404 sign"
        className="mb-8 max-w-xs rounded-lg shadow-lg"
      />
      <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Oops…</h1>
      <p className="mb-2 font-body text-lg text-foreground">
        Sir Richard says: "The page you're looking for is no longer available."
      </p>
      <p className="text-sm text-muted-foreground italic">
        (Please read in a wonderfully posh British accent.)
      </p>
    </div>
  );
};

export default NotFound;
