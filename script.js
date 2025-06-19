function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  let browserName = navigator.appName;
  let fullVersion = navigator.appVersion;
  let verOffset;

  if ((verOffset = userAgent.indexOf("Chrome")) !== -1) {
    browserName = "Chrome";
    fullVersion = userAgent.substring(verOffset + 7).split(" ")[0];
  } else if ((verOffset = userAgent.indexOf("Firefox")) !== -1) {
    browserName = "Firefox";
    fullVersion = userAgent.substring(verOffset + 8);
  } else if ((verOffset = userAgent.indexOf("Safari")) !== -1 &&
             userAgent.indexOf("Chrome") === -1) {
    browserName = "Safari";
    fullVersion = userAgent.substring(verOffset + 7).split(" ")[0];
  } else if ((verOffset = userAgent.indexOf("Edg")) !== -1) {
    browserName = "Edge";
    fullVersion = userAgent.substring(verOffset + 4).split(" ")[0];
  }

  const message = "You are using " + browserName + " version " + fullVersion;
  document.getElementById("browser-info").textContent = message;
}

getBrowserInfo();
