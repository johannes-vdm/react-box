import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (input.length >= 1) {
        const confirmationMessage =
          "Unsaved Changes. Are you sure you wish to exit?";
        e.returnValue = confirmationMessage; // For legacy browsers
        return confirmationMessage;
      }
    };

    const handlePopState = () => {
      if (
        input.length >= 1 &&
        !window.confirm("Unsaved Changes. Are you sure you wish to exit?")
      ) {
        navigate(); // If user cancels, navigate back to the current page
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [input, navigate]);

  const handleLinkClick = (e) => {
    if (
      input.length >= 1 &&
      !window.confirm(
        "Unsaved Changes. Are you sure you wish to navigate away?"
      )
    ) {
      e.preventDefault();
    }
  };

  return (
    <div>
      <h1>About</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter something"
      />

      <p>
        Typing more than 1 character in the input causes the prompt to show on
        navigation
      </p>

      <button onClick={() => navigate("/")}>Go to Home</button>
      <a href="/" onClick={handleLinkClick}>
        Navigate (with confirmation)
      </a>
    </div>
  );
};

export default Page2;
