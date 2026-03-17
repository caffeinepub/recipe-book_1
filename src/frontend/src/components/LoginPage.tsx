import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

interface LoginPageProps {
  onLoginSuccess: () => void;
  onBack: () => void;
}

export function LoginPage({ onLoginSuccess, onBack }: LoginPageProps) {
  const { login, register } = useAuth();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirm, setRegConfirm] = useState("");
  const [regError, setRegError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    try {
      login(loginEmail.trim(), loginPassword);
      onLoginSuccess();
    } catch (err) {
      setLoginError((err as Error).message);
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegError("");
    if (!regName.trim()) {
      setRegError("Name is required");
      return;
    }
    if (!regEmail.trim()) {
      setRegError("Email is required");
      return;
    }
    if (regPassword.length < 6) {
      setRegError("Password must be at least 6 characters");
      return;
    }
    if (regPassword !== regConfirm) {
      setRegError("Passwords do not match");
      return;
    }
    try {
      register(regName.trim(), regEmail.trim(), regPassword);
      onLoginSuccess();
    } catch (err) {
      setRegError((err as Error).message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="container max-w-md mx-auto px-4 py-12"
    >
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm"
        data-ocid="login.button"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Recipes
      </button>

      <div className="text-center mb-8">
        <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">📖</span>
        </div>
        <h1 className="font-display text-3xl font-bold mb-2">Welcome Back</h1>
        <p className="text-muted-foreground text-sm">
          Sign in to your Recipe Book account
        </p>
      </div>

      <div className="bg-card border border-border rounded-3xl p-6 shadow-sm">
        <Tabs defaultValue="login">
          <TabsList className="w-full mb-6">
            <TabsTrigger value="login" className="flex-1" data-ocid="login.tab">
              Login
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className="flex-1"
              data-ocid="login.tab"
            >
              Register
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form
              onSubmit={handleLogin}
              className="space-y-4"
              data-ocid="login.modal"
            >
              <div className="space-y-1.5">
                <Label htmlFor="login-email">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="your@email.com"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                  data-ocid="login.input"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="login-password">Password</Label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                  data-ocid="login.input"
                />
              </div>
              {loginError && (
                <p
                  className="text-sm text-destructive"
                  data-ocid="login.error_state"
                >
                  {loginError}
                </p>
              )}
              <Button
                type="submit"
                className="w-full mt-2"
                data-ocid="login.submit_button"
              >
                Login
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="register">
            <form
              onSubmit={handleRegister}
              className="space-y-4"
              data-ocid="register.modal"
            >
              <div className="space-y-1.5">
                <Label htmlFor="reg-name">Full Name</Label>
                <Input
                  id="reg-name"
                  placeholder="Your Name"
                  value={regName}
                  onChange={(e) => setRegName(e.target.value)}
                  required
                  data-ocid="register.input"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="reg-email">Email</Label>
                <Input
                  id="reg-email"
                  type="email"
                  placeholder="your@email.com"
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                  required
                  data-ocid="register.input"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="reg-password">Password</Label>
                <Input
                  id="reg-password"
                  type="password"
                  placeholder="Min 6 characters"
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                  required
                  data-ocid="register.input"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="reg-confirm">Confirm Password</Label>
                <Input
                  id="reg-confirm"
                  type="password"
                  placeholder="Repeat password"
                  value={regConfirm}
                  onChange={(e) => setRegConfirm(e.target.value)}
                  required
                  data-ocid="register.input"
                />
              </div>
              {regError && (
                <p
                  className="text-sm text-destructive"
                  data-ocid="register.error_state"
                >
                  {regError}
                </p>
              )}
              <Button
                type="submit"
                className="w-full mt-2"
                data-ocid="register.submit_button"
              >
                Create Account
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
}
