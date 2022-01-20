import Head from "next/head";
import { useEffect, useState } from "react";

export const IndexPage = () => {
  const [wsMessage, setWSMessage] = useState();
  const [people, setPeople] = useState([]);
  const [randomColor, setRandomColor] = useState();

  const fetchData = () => {
    fetch("/prod/")
      .then((x) => x.json())
      .then((x) => setPeople(x.body.people));
  };

  const connectToWebSocket = () => {
    const socket = new window.WebSocket(process.env.WS_URL);

    socket.addEventListener("open", () => {
      setInterval(() => {
        socket.send("Hello Server!");
      }, 3000);
    });

    socket.addEventListener("message", (e) => {
      setRandomColor(getRandomColor());
      setWSMessage(e.data);
    });
  };

  const getRandomColor = () => {
    const colors = ["red", "green", "blue", "purple", "orange"];
    const randomIndex = Math.floor(Math.random() * (colors.length - 0));

    return colors[randomIndex];
  };

  useEffect(() => {
    connectToWebSocket();
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Padaster Portal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <div className="container">
        <header>
          <h1>Rehash Code Challange</h1>
          <h2>Edward Anderson</h2>
        </header>
        <h3>Server Status</h3>
        <div className="server-status" style={{ color: randomColor }}>
          {wsMessage}
        </div>
        <h3>Data Entries</h3>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>IP Address</th>
            </tr>
          </thead>
          <tbody>
            {people.map((x) => (
              <tr>
                <td>{x.first_name} </td>
                <td>{x.last_name} </td>
                <td>{x.gender}</td>
                <td>{x.email}</td>
                <td>{x.ip_address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default IndexPage;
