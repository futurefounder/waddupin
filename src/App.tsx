import "dracula-ui/styles/dracula-ui.css";
import { Box, Input, Button, Checkbox, Text, OrderedList } from "dracula-ui";
import Header from "./Header";
import "./App.css";
import { useState } from "react";

function App() {
  const [accountURL, setAccountURL] = useState({
    name: "",
    openSameTab: false,
  });

  function handleChange(event: { target: { name: any; value: any } }) {
    setAccountURL({ ...accountURL, [event.target.name]: event.target.value });
  }

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const onClickUrl = (url) => {
    return () => openInNewTab(url);
  };

  return (
    <div className="App">
      <Header />
      <Text weight="bold" size="lg">
        Build Better Connecttions. <br />
        See what people posted recently{" "}
      </Text>
      <Text size="lg">
        <OrderedList>
          <li className="drac-text drac-text-white">
            Copy LinkedIn Account URL
          </li>
          <li className="drac-text drac-text-white">Paste, Click</li>
        </OrderedList>
      </Text>{" "}
      <Box>
        <Input
          color="purple"
          placeholder="Paste Account URL here"
          m="xs"
          type="text"
          name="name"
          value={accountURL.name}
          onChange={handleChange}
        />
        <br /> <br />
        <Checkbox
          id="normal"
          name="normal"
          color="purple"
          defaultChecked={false}
        />{" "}
        <label htmlFor="normal" className="drac-text drac-text-white">
          Open in same tab
        </label>{" "}
        <br />
        <Button
          color="pinkPurple"
          m="sm"
          onClick={onClickUrl(
            accountURL.name + "detail/recent-activity/shares/"
          )}
        >
          {" "}
          <Text color="white" weight="bold">
            Show recent shares
          </Text>
        </Button>
      </Box>
      Inspiration what to share <br />
      blablabla
      <br />
      Show example
    </div>
  );
}

export default App;
