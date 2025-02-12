javascript: (() => {
  if (!window.capturedLogs) {
    window.capturedLogs = [];
    let e = console.log;
    console.log = function (...r) {
      window.capturedLogs.push(r), e.apply(console, r);
    };
  }
  let r = [...document.getElementsByTagName("button")].filter(
    (e) => "Save" === e.title
  )[0];
  r.click();
  let o = window.capturedLogs.slice(-1)[0][1],
    t = window.prompt(
      "Enter the unique ID you want to use for this configuration."
    ),
    n = (e, r) => {
      let o = new Blob([JSON.stringify(e, null, 2)], {
          type: "application/json",
        }),
        t = document.createElement("a");
      (t.href = URL.createObjectURL(o)),
        (t.download = r),
        t.click(),
        URL.revokeObjectURL(t.href);
    },
    a = {
      id: t,
      rootElement: {
        type: "clic-drawing-tool",
        backgroundOptions: [
          { src: "space1.png", size: "cover", repeat: "no-repeat" },
          { src: "Space2.png", size: "cover", repeat: "no-repeat" },
          { src: "Barnyard1.jpg", size: "cover", repeat: "no-repeat" },
          { src: "Barnyard2.jpg", size: "cover", repeat: "no-repeat" },
        ],
        stickerOptions: [
          {
            src: "chicken1.png",
            shadow: !0,
            backgroundColor: "transparent",
            border: "none",
          },
          {
            src: "chicken2.png",
            shadow: !0,
            backgroundColor: "transparent",
            border: "none",
          },
          {
            src: "cow1.png",
            shadow: !1,
            backgroundColor: "transparent",
            border: "none",
          },
          {
            src: "pig1.png",
            shadow: !1,
            backgroundColor: "transparent",
            border: "none",
          },
        ],
        initialState: JSON.parse(o),
      },
    };
  n(a, t);
})();
