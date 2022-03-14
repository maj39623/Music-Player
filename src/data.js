import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Sunrise Hike",
      artist: "Ruck P",
      cover:
        "https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/605072dd8914772a1df825a9_ow9bl5athaeho9m-p-500.jpeg",
      id: uuidv4(),
      active: true,
      color: ["#6CC7B8", "#3A7B54"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12134",
    },
    {
      name: "Meadow",
      artist: "iamalex, azula, Dayle",
      cover:
        "https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/605072dd8914772a1df825a9_ow9bl5athaeho9m.jpg",
      id: uuidv4(),
      active: false,
      color: ["#6CC7B8", "#3A7B54"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12699",
    },
    {
      name: "Sirens",
      artist: "Cloudchord, Smile High, Teddy Roxpin",
      cover: "https://f4.bcbits.com/img/a1899435279_16.jpg",
      id: uuidv4(),
      active: false,
      color: ["#FBB389", "#D64A49"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21742",
    },
    {
      name: "Soul Food",
      artist: "Ruck P",
      cover:
        "https://i1.sndcdn.com/artworks-SrxE65v97ZOk5upq-uDl0yg-t500x500.jpg",
      id: uuidv4(),
      active: false,
      color: ["#FAB3CC", "#FADBED"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8273",
    },
    {
      name: "Runaway",
      artist: "Blue Wednesday, Magnus Klausen",
      cover:
        "https://resources.tidal.com/images/a3f5f388/6d9e/4489/aa12/41277d245402/640x640.jpg",
      id: uuidv4(),
      active: false,
      color: ["#912E3F", "#9A3544"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12136",
    },
    {
      name: "Solar Cove",
      artist: "Mama Aiuto",
      cover:
        "https://i1.sndcdn.com/artworks-9GwAvkgQzOPw4ZAz-KzjkKg-t500x500.jpg",
      id: uuidv4(),
      active: false,
      color: ["#FAAF83", "#B46B5D"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16179",
    },
  ];
}

export default chillHop;
