import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Lock, Mail, Eye, EyeOff, ArrowLeft } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await signIn(email, password);
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate("/admin");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      <div className="cyber-grid-bg absolute inset-0 opacity-30" />
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-[120px] opacity-[0.08]" style={{ background: 'hsl(168 100% 50%)' }} />

      <div className="w-full max-w-sm relative z-10">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors">
          <ArrowLeft size={16} /> Back to site
        </button>

        <div className="rounded-xl border border-primary/10 bg-secondary/30 backdrop-blur-sm p-6 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
              <Lock size={22} className="text-primary" />
            </div>
            <h1 className="text-xl font-bold heading-cyber text-foreground">Admin Login</h1>
            <p className="text-muted-foreground text-xs">Enter your credentials to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-primary/10 bg-background/60 text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/40 transition-all"
              />
            </div>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-primary/10 bg-background/60 text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/40 transition-all"
              />
              <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            {error && <p className="text-destructive text-xs text-center">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="btn-neon w-full !text-[11px] !py-2.5 justify-center disabled:opacity-60"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
