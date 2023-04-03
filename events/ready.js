module.exports = async (client) => {
  let statuses = [
    "chicken being pog",
    "my natural instincts",
    "komasan",
    "big chungus",
    "nithinan get tortured",
    "the almighty gaot",
    "aesthetic minecraft noises",
    "you",
    "life",
    "Listening",
    "nothing",
    "stuff",
    "earth",
    "monke"
  ]

  setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(status, {
      type: "LISTENING",
    });
  }, 1000);

  console.log(`[API] logged into ${client.user.username}`);
};