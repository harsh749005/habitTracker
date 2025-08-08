import { useContext, createContext, useState, useEffect } from "react";
import { account } from "./appwrite";
import parseAppwriteError from "@/utils/ParseAppWriteError";

type User = {
  name: string;
  email: string;
};

type SignUpParams = {
  name: string;
  email: string;
  password: string;
};

type SignInParams = {
  email: string;
  password: string;
};

type AuthContextType = {
  session: object | null;
  user: User | null;
  signUp: (params: SignUpParams) => Promise<void>;
  signIn: (params: SignInParams) => Promise<void>;
  signOut: () => Promise<void>;
  error: string;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [session, setSession] = useState<object | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const init = async () => {
      await checkAuth();
    };
    init();
  }, []);

  const checkAuth = async () => {
    try {
      const responseSession = await account.getSession("current");
      setSession(responseSession);

      const responseUser = await account.get();
      setUser(responseUser);
    } catch (error) {
      console.log("checkAuth error:", error);
      setSession(null);
      setUser(null);
    }
  };

  const signUp = async ({ email, password, name }: SignUpParams) => {
    try {
      setError("");
      // Create user
      await account.create("unique()", email, password, name);

      // Login user
      const responseSession = await account.createEmailPasswordSession(
        email,
        password
      );
      setSession(responseSession);

      // Get user
      const responseUser = await account.get();
      setUser(responseUser);
    } catch (e: any) {
      setError(parseAppwriteError(e.message));
      console.log("Sign up error:", e);
    }
  };

  const signIn = async ({ email, password }: SignInParams) => {
    try {
      setError("");
      const responseSession = await account.createEmailPasswordSession(
        email,
        password
      );
      setSession(responseSession);

      const responseUser = await account.get();
      setUser(responseUser);
    } catch (e: any) {
      console.log("Sign in error:", e);
      setError(parseAppwriteError(e.message));
    }
  };

  const signOut = async () => {
    try {
      setError("");
      await account.deleteSession("current");
      setSession(null);
      setUser(null);
    } catch (e: any) {
      setError(parseAppwriteError(e.message));
      console.log("Sign out error:", e);
    }
  };

  const contextData = { session, user, signIn, signOut, signUp, error };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { useAuth, AuthProvider };
