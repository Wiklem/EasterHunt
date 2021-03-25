import React from "react";
import { auth, authProvider } from "../utils/firebase";

interface IAuthContext {
  children?: JSX.Element;
  name?: string | null;
  token?: string | null;
  admin: boolean;
  signIn: any;
  signOut: any;
}

export const AuthContext = React.createContext<IAuthContext>({
  signIn: () => {},
  signOut: () => {},
  admin: false,
});

const AuthProvider: React.FC = ({ children }) => {
  const [id, setId] = React.useState<string | null>();
  const [name, setName] = React.useState<string | null>();
  const [admin, setAdmin] = React.useState(false);
  const [token, setToken] = React.useState<string | undefined | null>(
    undefined
  );

  const signInWithGoogle = async () => {
    await auth.signInWithPopup(authProvider).then((res) => {
      if (res.user) {
        setId(res.user.uid);
        setName(res.user.displayName);
        res.user.getIdToken().then((token) => {
          setToken(token);
        });
        if (res.user && res.user.email === "erlend@wiklem.no") {
          setAdmin(true);
        }
      }
    });
  };

  const signOut = async () => {
    await auth.signOut().then(() => {
      setAdmin(false);
      setId(undefined);
      setName(undefined);
    });
  };

  auth.onAuthStateChanged(async (user) => {
    if (user && user.uid !== id) {
      user.getIdToken().then((token) => {
        setId(user.uid);
        setName(user.displayName);
        setToken(token);
      });

      if (user.email === "erlend@wiklem.no") {
        setAdmin(true);
      }
    }
  });

  return (
    <AuthContext.Provider
      value={{
        admin,
        name,
        token,
        signOut,
        signIn: signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
