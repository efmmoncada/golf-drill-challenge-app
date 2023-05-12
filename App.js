import { React, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { auth } from "./firebaseConfig"; // ! IMPORTANT, DO NOT REMOVE
import RootNavigation from "./navigation";
import AuthContext from "./context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";

const queryClient = new QueryClient();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => onAuthStateChanged(auth, user => {
    setUser(user || null);
  }), []);

  useEffect(() => console.log(user), [user]);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={[user, setUser]}>
        <RootNavigation />
      </AuthContext.Provider>
    </QueryClientProvider>
  );
}
