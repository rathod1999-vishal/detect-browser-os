let browserType = document.getElementById("browserType");
let osType = document.getElementById("osType");

let browserList = [
  { name: "Firefox", value: "Firefox" },
  { name: "Opera", value: "Opera" },
  { name: "Chrome", value: "Chrome" },
  { name: "Edge", value: "Edge" },
  { name: "Safari", value: "Safari" },
];

let osList = [
  { name: "Android", value: "Android" },
  { name: "iOs", value: "iOs" },
  { name: "Linux", value: "Linux" },
  { name: "Windows", value: "Win" },
  { name: "Macintosh", value: "Mac" },
  { name: "ipad", value: "ipad" },
];

let browserChecker = () => {
  let userDetails = navigator.userAgent;
  console.log(userDetails);
  for (let i in browserList) {
    if (userDetails.includes(browserList[i].value)) {
      browserType.innerHTML = browserList[i].name || "unknown browser";
      break;
    }
  }

  for (let i in osList) {
    if (userDetails.includes(osList[i].value)) {
      osType.innerHTML = osList[i].name || "unknwon operating system";
      break;
    }
  }
};

window.onload = browserChecker();
