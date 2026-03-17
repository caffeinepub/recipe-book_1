import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, LogOut, Pencil, User, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

interface ProfilePageProps {
  onBack: () => void;
  onGoToLogin: () => void;
}

export function ProfilePage({ onBack, onGoToLogin }: ProfilePageProps) {
  const { user, logout, updateProfile } = useAuth();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [bio, setBio] = useState(user?.bio ?? "");
  const [saveError, setSaveError] = useState("");

  if (!user) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container max-w-md mx-auto px-4 py-20 text-center"
      >
        <div className="text-5xl mb-4">🔒</div>
        <h2 className="font-display text-2xl font-bold mb-3">Not Logged In</h2>
        <p className="text-muted-foreground mb-6">
          Please log in to view your profile.
        </p>
        <div className="flex gap-3 justify-center">
          <Button variant="outline" onClick={onBack} data-ocid="profile.button">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button onClick={onGoToLogin} data-ocid="profile.primary_button">
            Login
          </Button>
        </div>
      </motion.div>
    );
  }

  const initials = user.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaveError("");
    if (!name.trim()) {
      setSaveError("Name cannot be empty");
      return;
    }
    if (!email.trim()) {
      setSaveError("Email cannot be empty");
      return;
    }
    try {
      updateProfile(name.trim(), email.trim(), bio.trim());
      setEditing(false);
    } catch (err) {
      setSaveError((err as Error).message);
    }
  };

  const handleCancelEdit = () => {
    setName(user.name);
    setEmail(user.email);
    setBio(user.bio);
    setSaveError("");
    setEditing(false);
  };

  const handleLogout = () => {
    logout();
    onBack();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="container max-w-lg mx-auto px-4 py-12"
    >
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm"
        data-ocid="profile.button"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Recipes
      </button>

      <div className="text-center mb-8">
        <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl font-bold font-display text-primary-foreground">
            {initials}
          </span>
        </div>
        <h1 className="font-display text-3xl font-bold">{user.name}</h1>
        <p className="text-muted-foreground text-sm mt-1">{user.email}</p>
      </div>

      <div className="bg-card border border-border rounded-3xl p-6 shadow-sm">
        {!editing ? (
          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <User className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Name
                </span>
              </div>
              <p className="text-foreground font-medium">{user.name}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Email
                </span>
              </div>
              <p className="text-foreground font-medium">{user.email}</p>
            </div>
            {user.bio && (
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Bio
                  </span>
                </div>
                <p className="text-foreground text-sm leading-relaxed">
                  {user.bio}
                </p>
              </div>
            )}
            {!user.bio && (
              <div>
                <p className="text-muted-foreground text-sm italic">
                  No bio added yet.
                </p>
              </div>
            )}
            <div className="flex gap-3 pt-2">
              <Button
                className="flex-1 gap-2"
                onClick={() => setEditing(true)}
                data-ocid="profile.edit_button"
              >
                <Pencil className="w-4 h-4" />
                Edit Profile
              </Button>
              <Button
                variant="outline"
                className="gap-2 text-destructive border-destructive/30 hover:bg-destructive/10"
                onClick={handleLogout}
                data-ocid="profile.delete_button"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSave}
            className="space-y-4"
            data-ocid="profile.modal"
          >
            <div className="space-y-1.5">
              <Label htmlFor="prof-name">Name</Label>
              <Input
                id="prof-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                data-ocid="profile.input"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="prof-email">Email</Label>
              <Input
                id="prof-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                data-ocid="profile.input"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="prof-bio">Bio</Label>
              <Textarea
                id="prof-bio"
                placeholder="Tell us a bit about yourself…"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={3}
                data-ocid="profile.textarea"
              />
            </div>
            {saveError && (
              <p
                className="text-sm text-destructive"
                data-ocid="profile.error_state"
              >
                {saveError}
              </p>
            )}
            <div className="flex gap-3 pt-2">
              <Button
                type="submit"
                className="flex-1"
                data-ocid="profile.save_button"
              >
                Save Changes
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleCancelEdit}
                className="gap-2"
                data-ocid="profile.cancel_button"
              >
                <X className="w-4 h-4" />
                Cancel
              </Button>
            </div>
          </form>
        )}
      </div>
    </motion.div>
  );
}
