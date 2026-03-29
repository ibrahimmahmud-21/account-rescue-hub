import { useState, useEffect } from "react";
import { useNavigate, Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import {
  LayoutDashboard, FileText, Star, FolderOpen, Settings, LogOut,
  Menu, X, Users, Eye
} from "lucide-react";

const navItems = [
  { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { label: "Content", path: "/admin/content", icon: FileText },
  { label: "Projects", path: "/admin/projects", icon: FolderOpen },
  { label: "Reviews", path: "/admin/reviews", icon: Star },
  { label: "Settings", path: "/admin/settings", icon: Settings },
];

const AdminDashboard = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [stats, setStats] = useState({ projects: 0, reviews: 0, pendingReviews: 0 });

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/admin/login");
    }
  }, [user, isAdmin, loading, navigate]);

  useEffect(() => {
    const fetchStats = async () => {
      const [p, r, pr] = await Promise.all([
        supabase.from("projects").select("id", { count: "exact", head: true }),
        supabase.from("reviews").select("id", { count: "exact", head: true }),
        supabase.from("reviews").select("id", { count: "exact", head: true }).eq("approved", false),
      ]);
      setStats({
        projects: p.count || 0,
        reviews: r.count || 0,
        pendingReviews: pr.count || 0,
      });
    };
    if (isAdmin) fetchStats();
  }, [isAdmin]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAdmin) return null;

  const isActive = (path: string) => location.pathname === path;
  const isOverview = location.pathname === "/admin";

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-56 bg-card border-r border-primary/10 flex flex-col transition-transform duration-200 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static`}>
        <div className="p-4 border-b border-primary/10 flex items-center justify-between">
          <span className="font-cyber text-sm font-bold neon-text tracking-wider">Admin Panel</span>
          <button className="md:hidden text-muted-foreground" onClick={() => setSidebarOpen(false)}>
            <X size={18} />
          </button>
        </div>
        <nav className="flex-1 py-2">
          {navItems.map(({ label, path, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                isActive(path) ? "text-primary bg-primary/10 border-r-2 border-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              <Icon size={16} /> {label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-primary/10 space-y-2">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary text-xs transition-colors">
            <Eye size={14} /> View Site
          </Link>
          <button onClick={signOut} className="flex items-center gap-2 text-muted-foreground hover:text-destructive text-xs transition-colors w-full">
            <LogOut size={14} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="sticky top-0 z-30 bg-card/80 backdrop-blur-xl border-b border-primary/10 px-4 py-3 flex items-center gap-3">
          <button className="md:hidden text-foreground" onClick={() => setSidebarOpen(true)}>
            <Menu size={20} />
          </button>
          <h1 className="text-sm font-semibold heading-cyber text-foreground">
            {navItems.find(n => isActive(n.path))?.label || "Dashboard"}
          </h1>
        </header>

        <main className="flex-1 p-4 md:p-6">
          {isOverview ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <StatCard label="Total Projects" value={stats.projects} icon={FolderOpen} />
                <StatCard label="Total Reviews" value={stats.reviews} icon={Star} />
                <StatCard label="Pending Reviews" value={stats.pendingReviews} icon={Users} />
              </div>
              <div className="rounded-xl border border-primary/10 bg-secondary/20 p-6">
                <p className="text-muted-foreground text-sm">Welcome back! Use the sidebar to manage your website content, projects, and reviews.</p>
              </div>
            </div>
          ) : (
            <Outlet />
          )}
        </main>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, icon: Icon }: { label: string; value: number; icon: any }) => (
  <div className="rounded-xl border border-primary/10 bg-secondary/20 p-4 flex items-center gap-4">
    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
      <Icon size={18} className="text-primary" />
    </div>
    <div>
      <p className="text-2xl font-bold text-foreground">{value}</p>
      <p className="text-muted-foreground text-xs">{label}</p>
    </div>
  </div>
);

export default AdminDashboard;
