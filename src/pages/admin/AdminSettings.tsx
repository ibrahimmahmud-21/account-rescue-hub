import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Save, Loader2, Key, Mail } from "lucide-react";
import { toast } from "sonner";

const AdminSettings = () => {
  const { user } = useAuth();
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [saving, setSaving] = useState(false);

  const handleUpdateEmail = async () => {
    if (!email.trim()) return;
    setSaving(true);
    const { error } = await supabase.auth.updateUser({ email });
    if (error) toast.error(error.message);
    else toast.success("Email update requested. Check your inbox.");
    setSaving(false);
  };

  const handleUpdatePassword = async () => {
    if (password.length < 6) { toast.error("Password must be at least 6 characters"); return; }
    if (password !== confirmPassword) { toast.error("Passwords don't match"); return; }
    setSaving(true);
    const { error } = await supabase.auth.updateUser({ password });
    if (error) toast.error(error.message);
    else { toast.success("Password updated!"); setPassword(""); setConfirmPassword(""); }
    setSaving(false);
  };

  return (
    <div className="space-y-6 max-w-md">
      <div className="rounded-xl border border-primary/10 bg-secondary/20 p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Mail size={16} className="text-primary" />
          <h3 className="text-sm font-bold heading-cyber text-foreground">Change Email</h3>
        </div>
        <input
          type="email" value={email} onChange={e => setEmail(e.target.value)}
          className="w-full rounded-lg border border-primary/10 bg-background/60 text-foreground text-sm p-2.5 focus:outline-none focus:border-primary/40"
        />
        <button onClick={handleUpdateEmail} disabled={saving} className="btn-neon !text-[10px] !py-2 !px-4 flex items-center gap-1.5">
          {saving ? <Loader2 size={12} className="animate-spin" /> : <Save size={12} />} Update Email
        </button>
      </div>

      <div className="rounded-xl border border-primary/10 bg-secondary/20 p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Key size={16} className="text-primary" />
          <h3 className="text-sm font-bold heading-cyber text-foreground">Change Password</h3>
        </div>
        <input
          type="password" value={password} onChange={e => setPassword(e.target.value)}
          placeholder="New password" className="w-full rounded-lg border border-primary/10 bg-background/60 text-foreground text-sm p-2.5 focus:outline-none focus:border-primary/40"
        />
        <input
          type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
          placeholder="Confirm password" className="w-full rounded-lg border border-primary/10 bg-background/60 text-foreground text-sm p-2.5 focus:outline-none focus:border-primary/40"
        />
        <button onClick={handleUpdatePassword} disabled={saving} className="btn-neon !text-[10px] !py-2 !px-4 flex items-center gap-1.5">
          {saving ? <Loader2 size={12} className="animate-spin" /> : <Save size={12} />} Update Password
        </button>
      </div>
    </div>
  );
};

export default AdminSettings;
