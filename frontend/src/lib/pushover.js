export const sendNotification = async (buttonName) => {
  const data = new URLSearchParams({
    token: "a8s8bnf6kq5r4venm1qchuv218ks8d",
    user: "u949amfq2cfpocn7nwb5a11jmf7naw",
    title: "For Her",
    message: `${buttonName} clicked at ${new Date().toLocaleString()}`,
  });

  await fetch("https://api.pushover.net/1/messages.json", {
    method: "POST",
    body: data,
  });
};