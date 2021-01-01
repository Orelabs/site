import React from "react";
import { toast } from "react-toastify";

export function CookiesNotice() {
  if (!window.localStorage.getItem("cookies")) {
    const removeNotice = () => window.localStorage.setItem("cookies", true);

    toast.dark(
      <>
        We use cookies to improve your experience on our website.{" "}
        <span
          className="js-link"
          onClick={() => (window.location.href = "/privacy")}
        >
          Learn more
        </span>
      </>,
      { autoClose: false, position: "bottom-center", onClose: removeNotice }
    );
  }
  return <></>;
}
