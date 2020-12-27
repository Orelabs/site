import React from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { FaHome } from "react-icons/fa";

export function SupportServerRedirect() {
  const opened = window.open("https://discord.com/invite/pWXzvNZsS5", "_blank");

  var message = <></>;
  if (opened === null) {
    toast.warning(`Your browser blocked us from opening a new tab, so we'll redirect you to our support server \
    in this tab shortly.`);

    setTimeout(() => {
      window.location.href = "https://discord.com/invite/pWXzvNZsS5";
    }, 3000);
  } else {
    toast.success("Redirected you to our support server in a new tab!");
    message = (
      <>
        <h1>Thanks for joining our support server!</h1>
        <Button variant="success" style={{ marginTop: "50px" }} href="/">
          <FaHome style={{ marginRight: "5px" }} />
          Return Home
        </Button>
      </>
    );
  }
  return <>{message}</>;
}
