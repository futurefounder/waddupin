import "dracula-ui/styles/dracula-ui.css";
import { Heading } from "dracula-ui";

export default function Header() {
  return (
    <div className="drac-text-black-secondary">
      {" "}
      <Heading className="nav--style ">
        <span className="drac-text-pink-purple">waddupIN</span>
      </Heading>{" "}
    </div>
  );
}
