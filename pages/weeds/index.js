import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Weed = () => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.token) {
      router.push("/");
    }
  }, []);

  return <div>Welcome to the Weeds component</div>;
};

export default Weed;
