import { useState, useEffect } from "react";

export default function AdminPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTinaAdmin = async () => {
      try {
        // Redirect to Tina's admin interface
        if (typeof window !== "undefined") {
          window.location.href = "/admin/index.html";
        }
      } catch (error) {
        console.error("Error loading Tina admin:", error);
        setIsLoading(false);
      }
    };

    loadTinaAdmin();
  }, []);

  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1>Loading Tina CMS Admin...</h1>
          <p>Redirecting to the admin interface...</p>
          <div style={{ 
            margin: '20px auto',
            width: '50px',
            height: '50px',
            border: '3px solid #f3f3f3',
            borderTop: '3px solid #007acc',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
          <style jsx>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Tina CMS Admin</h1>
      <p>If you're not automatically redirected, please run:</p>
      <code style={{ 
        background: '#f5f5f5', 
        padding: '10px', 
        borderRadius: '5px',
        display: 'inline-block',
        margin: '10px 0'
      }}>
        npm run dev
      </code>
      <p>Then visit <code>http://localhost:3000/admin</code></p>
    </div>
  );
}