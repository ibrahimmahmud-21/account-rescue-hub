import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Save, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface ContentField {
  section: string;
  key: string;
  label: string;
  type: "text" | "textarea";
}

const fields: ContentField[] = [
  { section: "hero", key: "name", label: "Hero Name", type: "text" },
  { section: "hero", key: "title", label: "Hero Title", type: "text" },
  { section: "hero", key: "tagline", label: "Hero Tagline", type: "textarea" },
  { section: "about", key: "description", label: "About Description", type: "textarea" },
  { section: "contact", key: "email", label: "Contact Email", type: "text" },
  { section: "contact", key: "facebook", label: "Facebook URL", type: "text" },
  { section: "contact", key: "telegram", label: "Telegram URL", type: "text" },
];

const ContentEditor = () => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.from("site_content").select("*");
      if (data) {
        const map: Record<string, string> = {};
        data.forEach(r => { map[`${r.section}:${r.key}`] = r.value || ""; });
        setValues(map);
      }
      setLoaded(true);
    };
    load();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      for (const field of fields) {
        const k = `${field.section}:${field.key}`;
        const val = values[k] || "";
        await supabase.from("site_content").upsert(
          { section: field.section, key: field.key, value: val },
          { onConflict: "section,key" }
        );
      }
      toast.success("Content saved!");
    } catch {
      toast.error("Failed to save content");
    }
    setSaving(false);
  };

  if (!loaded) return <div className="flex justify-center py-12"><Loader2 className="animate-spin text-primary" size={24} /></div>;

  const sections = [...new Set(fields.map(f => f.section))];

  return (
    <div className="space-y-6 max-w-2xl">
      {sections.map(section => (
        <div key={section} className="rounded-xl border border-primary/10 bg-secondary/20 p-4 space-y-3">
          <h3 className="text-sm font-bold heading-cyber text-primary uppercase tracking-wider">{section}</h3>
          {fields.filter(f => f.section === section).map(field => {
            const k = `${field.section}:${field.key}`;
            return (
              <div key={k}>
                <label className="text-xs text-muted-foreground mb-1 block">{field.label}</label>
                {field.type === "textarea" ? (
                  <textarea
                    value={values[k] || ""}
                    onChange={e => setValues(v => ({ ...v, [k]: e.target.value }))}
                    rows={3}
                    className="w-full rounded-lg border border-primary/10 bg-background/60 text-foreground text-sm p-2.5 focus:outline-none focus:border-primary/40 transition-all resize-none"
                  />
                ) : (
                  <input
                    value={values[k] || ""}
                    onChange={e => setValues(v => ({ ...v, [k]: e.target.value }))}
                    className="w-full rounded-lg border border-primary/10 bg-background/60 text-foreground text-sm p-2.5 focus:outline-none focus:border-primary/40 transition-all"
                  />
                )}
              </div>
            );
          })}
        </div>
      ))}
      <button onClick={handleSave} disabled={saving} className="btn-neon !text-[11px] !py-2.5 !px-6 flex items-center gap-2">
        {saving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
        {saving ? "Saving..." : "Save All"}
      </button>
    </div>
  );
};

export default ContentEditor;
