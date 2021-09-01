import { useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [file, setFile] = useState(null);
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleFileUpload = () => {
    const dataRecieved = new FormData();
    dataRecieved.append("data", file, file.name);
    console.log(file.name);
    const headers = {
      "Content-Type": "application/json",
      Authorization: "36c7770d-e525-461c-bd3e-b4e80470deb4",
      Cookie: "JSESSIONID=882F7E0430F726E011BEB4BB80E9C81D",
      filename: file.name
    };
    axios
      .post(
        "https://dev.homingos.com/homingo/admin/upload/getS3SignedUrl",
        dataRecieved,
        { headers: headers }
      )
      .then((res) => console.log(res));
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="file" onChange={(e) => handleChange(e)} />
      <button onClick={() => handleFileUpload()}>Submit</button>
    </div>
  );
}
