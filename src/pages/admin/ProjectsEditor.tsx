import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Trash2, Save, Loader2, ExternalLink } from "lucide-react";
import { toast } from "sonner";

interface Project {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  link: string | null;
  sort_order: number | null;
}

const ProjectsEditor = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);

  const load = async () => {
    const { data } = await supabase.from("projects").select("*").order("sort_order");
    setProjects(data || []);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const addProject = async () => {
    const { data, error } = await supabase.from("projects").insert({ title: "New Project" }).select().single();
    if (data) setProjects(p => [...p, data]);
    if (error) toast.error(error.message);
  };

  const updateProject = async (id: string, updates: Partial<Project>) => {
    setSaving(id);
    const { error } = await supabase.from("projects").update(updates).eq("id", id);
    if (error) toast.error(error.message);
    else toast.success("Saved");
    setSaving(null);
  };

  const deleteProject = async (id: string) => {
    if (!confirm("Delete this project?")) return;
    await supabase.from("projects").delete().eq("id", id);
    setProjects(p => p.filter(x => x.id !== id));
    toast.success("Deleted");
  };

  const handleImageUpload = async (id: string, file: File) => {
    const ext = file.name.split(".").pop();
    const path = `projects/${id}.${ext}`;
    const { error } = await supabase.storage.from("uploads").upload(path, file, { upsert: true });
    if (error) { toast.error(error.message); return; }
    const { data: { publicUrl } } = supabase.storage.from("uploads").getPublicUrl(path);
    await updateProject(id, { image_url: publicUrl });
    setProjects(p => p.map(x => x.id === id ? { ...x, image_url: publicUrl } : x));
  };

  if (loading) return <div className="flex justify-center py-12"><Loader2 className="animate-spin text-primary" size={24} /></div>;

  return (
    <div className="space-y-4 max-w-2xl">
      {projects.map(project => (
        <div key={project.id} className="rounded-xl border border-primary/10 bg-secondary/20 p-4 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <input
              value={project.title}
              onChange={e => setProjects(p => p.map(x => x.id === project.id ? { ...x, title: e.target.value } : x))}
              className="flex-1 rounded-lg border border-primary/10 bg-background/60 text-foreground text-sm p-2 font-semibold focus:outline-none focus:border-primary/40"
              placeholder="Project title"
            />
            <button onClick={() => deleteProject(project.id)} className="text-muted-foreground hover:text-destructive p-1">
              <Trash2 size={16} />
            </button>
          </div>
          <textarea
            value={project.description || ""}
            onChange={e => setProjects(p => p.map(x => x.id === project.id ? { ...x, description: e.target.value } : x))}
            placeholder="Description"
            rows={2}
            className="w-full rounded-lg border border-primary/10 bg-background/60 text-foreground text-sm p-2 focus:outline-none focus:border-primary/40 resize-none"
          />
          <div className="flex gap-2 items-center">
            <input
              value={project.link || ""}
              onChange={e => setProjects(p => p.map(x => x.id === project.id ? { ...x, link: e.target.value } : x))}
              placeholder="Project link URL"
              className="flex-1 rounded-lg border border-primary/10 bg-background/60 text-foreground text-sm p-2 focus:outline-none focus:border-primary/40"
            />
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary">
                <ExternalLink size={16} />
              </a>
            )}
          </div>
          <div className="flex items-center gap-3">
            {project.image_url && (
              <img src={project.image_url} alt="" className="w-16 h-12 rounded object-cover border border-primary/10" />
            )}
            <label className="text-xs text-primary cursor-pointer hover:underline">
              Upload Image
              <input type="file" accept="image/*" className="hidden" onChange={e => e.target.files?.[0] && handleImageUpload(project.id, e.target.files[0])} />
            </label>
          </div>
          <button
            onClick={() => updateProject(project.id, { title: project.title, description: project.description, link: project.link })}
            disabled={saving === project.id}
            className="btn-neon !text-[10px] !py-2 !px-4 flex items-center gap-1.5"
          >
            {saving === project.id ? <Loader2 size={12} className="animate-spin" /> : <Save size={12} />}
            Save
          </button>
        </div>
      ))}
      <button onClick={addProject} className="btn-ghost-neon !text-[10px] !py-2.5 !px-5 flex items-center gap-2">
        <Plus size={14} /> Add Project
      </button>
    </div>
  );
};

export default ProjectsEditor;
