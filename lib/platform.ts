// export function getMobilePlatform() {
//     if (typeof navigator === "undefined") return "web";
  
//     const ua = navigator.userAgent.toLowerCase();
//     if (ua.includes("android")) return "android";
//     if (ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod"))
//       return "ios";
//     return "web";
//   }


  export function getMobilePlatform(): "ios" | "android" | "other" {
    if (typeof navigator === "undefined") return "other";
  
    const ua = navigator.userAgent || "";
    const isAndroid = /Android/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
  
    if (isIOS) return "ios";
    if (isAndroid) return "android";
    return "other";
  }