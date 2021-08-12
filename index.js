// 1. Navigate to https://popcat.click/
// 2. Press F12
// 3. Paste following code and run

setInterval(
  () =>
    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "13",
      })
    ),
  0
);
