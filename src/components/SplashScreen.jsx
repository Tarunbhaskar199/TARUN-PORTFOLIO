import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (hasVisited) {
      setLoading(false); // already visited → skip splash
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("hasVisited", "true"); // mark as visited
      }, 2500); // 2.5s splash only first time

      return () => clearTimeout(timer);
    }
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 text-white z-50">
      <div className="text-center animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">Tarun Bhaskar</h1>
        <p className="text-lg md:text-2xl">Portfolio Loading...</p>
      </div>
    </div>
  );
}