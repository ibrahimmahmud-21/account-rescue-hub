import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Trash2, Check, X, Loader2, Star } from "lucide-react";
import { toast } from "sonner";

interface Review {
  id: string;
  name: string;
  photo_url: string | null;
  rating: number;
  comment: string;
  approved: boolean | null;
  created_at: string;
}

const ReviewsEditor = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", rating: 5, comment: "" });

  const load = async () => {
    const { data } = await supabase.from("reviews").select("*").order("created_at", { ascending: false });
    setReviews(data || []);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const addReview = async () => {
    if (!form.name.trim() || !form.comment.trim()) { toast.error("Fill all fields"); return; }
    const { error } = await supabase.from("reviews").insert({
      name: form.name, rating: form.rating, comment: form.comment, approved: false
    });
    if (error) toast.error(error.message);
    else { toast.success("Review added"); setForm({ name: "", rating: 5, comment: "" }); setShowForm(false); load(); }
  };

  const toggleApproval = async (id: string, current: boolean | null) => {
    const { error } = await supabase.from("reviews").update({ approved: !current }).eq("id", id);
    if (error) toast.error(error.message);
    else { setReviews(r => r.map(x => x.id === id ? { ...x, approved: !current } : x)); toast.success(!current ? "Approved" : "Unapproved"); }
  };

  const deleteReview = async (id: string) => {
    if (!confirm("Delete this review?")) return;
    await supabase.from("reviews").delete().eq("id", id);
    setReviews(r => r.filter(x => x.id !== id));
    toast.success("Deleted");
  };

  if (loading) return <div className="flex justify-center py-12"><Loader2 className="animate-spin text-primary" size={24} /></div>;

  return (
    <div className="space-y-4 max-w-2xl">
      {showForm && (
        <div className="rounded-xl border border-primary/10 bg-secondary/20 p-4 space-y-3">
          <h3 className="text-sm font-bold heading-cyber text-primary">New Review</h3>
          <input
            value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            placeholder="Reviewer name" className="w-full rounded-lg border border-primary/10 bg-background/60 text-foreground text-sm p-2.5 focus:outline-none focus:border-primary/40"
          />
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Rating:</span>
            {[1,2,3,4,5].map(n => (
              <button key={n} onClick={() => setForm(f => ({ ...f, rating: n }))} className={n <= form.rating ? "text-yellow-400" : "text-muted-foreground/30"}>
                <Star size={18} fill={n <= form.rating ? "currentColor" : "none"} />
              </button>
            ))}
          </div>
          <textarea
            value={form.comment} onChange={e => setForm(f => ({ ...f, comment: e.target.value }))}
            placeholder="Comment" rows={3} className="w-full rounded-lg border border-primary/10 bg-background/60 text-foreground text-sm p-2.5 focus:outline-none focus:border-primary/40 resize-none"
          />
          <div className="flex gap-2">
            <button onClick={addReview} className="btn-neon !text-[10px] !py-2 !px-4">Add</button>
            <button onClick={() => setShowForm(false)} className="btn-ghost-neon !text-[10px] !py-2 !px-4">Cancel</button>
          </div>
        </div>
      )}

      {reviews.map(review => (
        <div key={review.id} className={`rounded-xl border p-4 flex items-start gap-3 ${review.approved ? "border-primary/20 bg-secondary/20" : "border-yellow-500/20 bg-yellow-500/5"}`}>
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-foreground">{review.name}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${review.approved ? "bg-primary/15 text-primary" : "bg-yellow-500/15 text-yellow-400"}`}>
                {review.approved ? "Approved" : "Pending"}
              </span>
            </div>
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(n => (
                <Star key={n} size={12} className={n <= review.rating ? "text-yellow-400" : "text-muted-foreground/20"} fill={n <= review.rating ? "currentColor" : "none"} />
              ))}
            </div>
            <p className="text-muted-foreground text-xs">{review.comment}</p>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <button onClick={() => toggleApproval(review.id, review.approved)} className={`p-1.5 rounded-md ${review.approved ? "text-yellow-400 hover:bg-yellow-500/10" : "text-primary hover:bg-primary/10"}`} title={review.approved ? "Unapprove" : "Approve"}>
              {review.approved ? <X size={14} /> : <Check size={14} />}
            </button>
            <button onClick={() => deleteReview(review.id)} className="p-1.5 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10">
              <Trash2 size={14} />
            </button>
          </div>
        </div>
      ))}

      {!showForm && (
        <button onClick={() => setShowForm(true)} className="btn-ghost-neon !text-[10px] !py-2.5 !px-5 flex items-center gap-2">
          <Plus size={14} /> Add Review
        </button>
      )}
    </div>
  );
};

export default ReviewsEditor;
