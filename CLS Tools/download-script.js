const downloadButton = document.getElementById("download-config-file");
downloadButton.addEventListener("click", () => {
  console.log("test");
  if (!window.capturedLogs) {
    window.capturedLogs = [];
    const originalConsoleLog = console.log;
    console.log = function (...args) {
      window.capturedLogs.push(args);
      originalConsoleLog.apply(console, args);
    };
  }
  const saveButton = [...document.getElementsByTagName("button")].filter(
    (el) => el.title === "Save"
  )[0];
  saveButton.click();
  const saveString = window.capturedLogs.slice(-1)[0][1];
  const configID = window.prompt(
    "Enter the unique ID you want to use for this configuration."
  );
  const downloadJSON = (obj, fileName) => {
    const blob = new Blob([JSON.stringify(obj, null, 2)], {
      type: "application/json",
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(a.href);
  };
  const configObj = {
    id: configID,
    rootElement: {
      type: "clic-drawing-tool",
      backgroundOptions: [
        {
          src: "space1.png",
          size: "cover",
          repeat: "no-repeat",
        },
        {
          src: "Space2.png",
          size: "cover",
          repeat: "no-repeat",
        },
        {
          src: "Barnyard1.jpg",
          size: "cover",
          repeat: "no-repeat",
        },
        {
          src: "Barnyard2.jpg",
          size: "cover",
          repeat: "no-repeat",
        },
      ],
      stickerOptions: [
        {
          src: "chicken1.png",
          shadow: true,
          backgroundColor: "transparent",
          border: "none",
        },
        {
          src: "chicken2.png",
          shadow: true,
          backgroundColor: "transparent",
          border: "none",
        },
        {
          src: "cow1.png",
          shadow: false,
          backgroundColor: "transparent",
          border: "none",
        },
        {
          src: "pig1.png",
          shadow: false,
          backgroundColor: "transparent",
          border: "none",
        },
      ],
      initialState: JSON.parse(saveString),
    },
  };

  downloadJSON(configObj, configID);
});
