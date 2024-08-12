const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

function query(sql, callback) {
  const connection = mysql.createConnection(config);

  if (callback) {
    connection.query(sql, callback);
  } else {
    connection.query(sql);
  }

  connection.end();
}

query(`CREATE TABLE IF NOT EXISTS people(
  id int not null auto_increment,
  name varchar(255),
  primary key(id)
)`);

app.get("/", async (_, res) => {
  query("INSERT INTO people(name) values('Nome');");

  query("SELECT * FROM people;", (error, _results) => {
    if (error) return res.status(404);

    const html = `
      <div>
        <h1>Full Cycle Rocks!</h1>

        <ol>
          ${_results.map((people) => `<li>${people.name}</li>`).join("")}
        </ol>
      </div>
    `;

    res.send(html);
  });
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
