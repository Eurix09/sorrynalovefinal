const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve static files from music folder
app.use('/music', express.static('music'));
app.use(express.static('.'));

app.get("/", async function (req, res) {
  res.sendFile(path.join(__dirname, "love.html"));
});

app.get("/picnilove", async function (req, res) {
  res.sendFile(path.join(__dirname, "eabab.jpg"));
});

app.get("/context", async function (req, res) {
  const context = "Love, sorry na please. Wag ka na mag tampo. Never po ako mag cheat sa'yo, I promise you ikaw at ako lang po. Ito ginawan na kita ng code ko 💋😍 kaya please sorry na po. I love you so much 😘💋, kasi nakilala kita. Diba sa December magkikita na tayo? Kaya sana pagbigyan mo muna ako, di na po mauulit yun. I love you, ikaw at ako lang po hehe. Ang OA ko na haha, sorry di talaga ako marunong manuyo pero sana patawarin mo muna ako. Nagmamahal, Eurix On Top";
  res.json({ message: context });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});