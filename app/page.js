"use client";
import { FaTwitter, FaFacebook, FaSearch, FaShoppingBag, FaGoogle, FaInstagram, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [cartCount, setCartCount] = useState(0);
  const [isLoginVisible, setLoginVisible] = useState(false);

  const addToCart = () => {
    setCartCount(cartCount + 1);
    document.querySelector(".shopping-bag").classList.add("bounce");
    setTimeout(() => {
      document.querySelector(".shopping-bag").classList.remove("bounce");
    }, 600);
  };

  const toggleLogin = () => setLoginVisible(!isLoginVisible);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(45deg, #ff9a9e, #fad0c4, #fad0c4, #fbc2eb)",
        backgroundSize: "400% 400%",
        animation: "gradientAnimation 10s ease infinite",
      }}
    >
      <style jsx>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .shopping-bag.bounce {
          animation: bounce 0.5s ease;
        }

        .login-btn {
          transition: background-color 0.3s, transform 0.3s ease;
        }

        .login-btn:hover {
          background-color: #004aad !important;
          transform: scale(1.1);
        }

        .fab {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 50px;
          height: 50px;
          background: #4caf50;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
        }

        .fab:hover {
          transform: scale(1.2);
          background: #45a049;
        }
      `}</style>

      {/* Navigation Bar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          backgroundColor: "#333",
          color: "white",
          position: "fixed",
          width: "100%",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/logo.png"
            alt="Logo"
            style={{ width: 40, height: 40, marginRight: 8 }}
          />
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            Pixel <span style={{ color: "#f50057" }}>Craft</span>
          </h1>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <a
            href="/"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "1rem",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#f50057")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Home
          </a>
          <a
            href="/product"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "1rem",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#f50057")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Products
          </a>
          <a
            href="/contact"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "1rem",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#f50057")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Contact
          </a>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Search"
              style={{
                padding: "0.5rem 1rem",
                borderRadius: 4,
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
            <FaSearch
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                color: "#999",
              }}
            />
          </div>
          <div
            className="shopping-bag"
            style={{
              position: "relative",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onClick={() => router.push("/cart")}
          >
            <FaShoppingBag size={40} />
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-5px",
                  backgroundColor: "#f50057",
                  color: "white",
                  fontSize: "0.8rem",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {cartCount}
              </span>
            )}
          </div>
          <button
            onClick={toggleLogin}
            className="login-btn"
            style={{
              backgroundColor: "#007BFF",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: 4,
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div
        style={{
          flexGrow: 1,
          paddingTop: "6rem",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Welcome to <span style={{ color: "#f50057" }}>Pixel Craft</span>
        </h1>
        <button
          style={{
            backgroundColor: "#f50057",
            color: "white",
            padding: "0.75rem 2rem",
            borderRadius: 4,
            fontSize: "1.25rem",
            border: "none",
            cursor: "pointer",
            transition: "transform 0.3s",
          }}
          onClick={() => router.push("/product")}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Buy
        </button>
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#333",
          color: "white",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <p>&copy; 2024 Pixel Craft. All rights reserved.</p>
        <p className="text-sm mt-2">Follow us on:</p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-all duration-300 transform hover:scale-125"
            style={{
              boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.3)",
              borderRadius: "50%",
              padding: "10px",
              backgroundColor: "white",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-5px) scale(1.1)";
              e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.boxShadow = "2px 4px 8px rgba(0, 0, 0, 0.3)";
            }}
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-125"
            style={{
              boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.3)",
              borderRadius: "50%",
              padding: "10px",
              backgroundColor: "white",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-5px) scale(1.1)";
              e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.boxShadow = "2px 4px 8px rgba(0, 0, 0, 0.3)";
            }}
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 transition-all duration-300 transform hover:scale-125"
            style={{
              boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.3)",
              borderRadius: "50%",
              padding: "10px",
              backgroundColor: "white",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-5px) scale(1.1)";
              e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.boxShadow = "2px 4px 8px rgba(0, 0, 0, 0.3)";
            }}
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </footer>

      <div
        className="fab"
        style={{
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          backgroundColor: "#4CAF50",
        }}
        onClick={() => alert("Fab clicked!")}
      >
        <FaGoogle />
      </div>
    </div>
  );
}
