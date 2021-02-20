export interface KVPair {
  [key: string]: unknown;
}

export const goToSite = (url: string, openNewTab = false) => {
  if(!openNewTab) {
    window.location.href = url;
  } else {
    window.open(url, '_blank');
  }
};

export const isDeviceMobile = !(/Win32|Win64|Windows/.test(navigator.platform)); 