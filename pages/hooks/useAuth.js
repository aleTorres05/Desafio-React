import { useEffect } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
  const navigate = useNavigate();
  const [token, setToken] = useEffect("");

  useEffect(() => {
    const tkn = localStorage.getItem("token");
    setToken(tkn);
    if (!tkn) {
      toast.error("Debes de iniciar session de nuevox");
      navigate("/login");
    }
  }, [navigate]);
  return token;
}
