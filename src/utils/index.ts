import { MutableRefObject } from 'react'

export const getDeviceInfo = (() => {
  const ua = window.navigator?.userAgent;

  const isAndroid = /android/i.test(ua);
  const isIos = /iPhone|iPad|iPod|iOS/i.test(ua);
  const isMobile = /Mobi|Android|iPhone/i.test(ua);

  return {
    isMobile,
    isAndroid,
    isIos,
  };
})();
export const isHair = () => {
  if (!window.screen) return false;
  const { width: screenWidth, height: screenHeight } = window.screen;
  const heightLengths = [812, 896, 844, 926, 693, 852, 932];
  const widthLengths = [375, 414, 390, 428, 320, 393, 430];
  const heightIndex = heightLengths.findIndex((h) => h === screenHeight);
  return heightIndex > -1 && widthLengths[heightIndex] === screenWidth;
};
export const navbarHeight = (() => {
  const { isIos, isAndroid, isMobile } = getDeviceInfo;
  let statusBarHeight = 0;
  let navBarHeight = 0;
  let topNavHeight = 1000;
  const scale = 375 / window.screen.width;
  if (!isMobile) {
    statusBarHeight = 0;
    navBarHeight = 20;
  } else if (isHair()) {
    statusBarHeight = 44 * scale;
    navBarHeight = 44 * scale;
  } else if (isIos) {
    statusBarHeight = 20 * scale;
    navBarHeight = 44 * scale;
    topNavHeight = 956;
  } else {
    statusBarHeight = 0;
    navBarHeight = 96 / 2;
    topNavHeight = 940;
  }
  if (isAndroid) {
    navBarHeight = 86 / 2;
    if (window.navigator.userAgent.indexOf("Windmill") !== -1) {
      statusBarHeight = 44 / 2;
      if (window.screen.height / window.screen.width > 1.95) {
        statusBarHeight = 60 / 2;
      }
    }

    // 当获取statusbar失败，则设置默认值：25
    statusBarHeight = statusBarHeight || 25;
  }
  return {
    statusBarHeight: statusBarHeight * 2,
    navBarHeight: navBarHeight * 2,
    topNavHeight
  };
})();

export const getRpx2px = (rpx: number): number => {

  const dpr: number = Number(window.document.documentElement.getAttribute('data-dpr'));
  const ScreenWidth = getDeviceInfo.isMobile ? window.screen.width : 60 * 7.5;
  return (rpx * ScreenWidth * dpr) / 750;
};
// ms->hh时mm分ss秒
export const formatMs = (ms: number): string => {
  let remain = 0;
  const h = Math.floor(ms / (1000 * 60 * 60));
  remain = ms % (1000 * 60 * 60);
  const m = Math.floor(remain / (1000 * 60));
  remain = remain % (1000 * 60);
  const s = Math.floor(remain / 1000);
  remain = remain % 1000;
  if (h >= 1) return `${h}时${m}分${s}秒`
  if (m >= 1) return `${m}分${s}秒`
  return `${s}秒`
}

export function viewport() {
  // flexible的动态计算，兼容了很多场景
  const doc = window.document;
  const docEl = doc.documentElement;
  let metaEl = doc.querySelector('meta[name="viewport"]');
  const flexibleEl = doc.querySelector('meta[name="flexible"]');
  const { isMobile } = getDeviceInfo;
  let dpr: number = 0;
  let scale: number = 0;
  let tid: number;

  if (metaEl) {
    console.warn('将根据已有的meta标签来设置缩放比例');
    const match = metaEl.getAttribute('content').match(/initial-scale=([\d.]+)/);

    if (match) {
      scale = parseFloat(match[1]);
      dpr = parseInt(String(1 / scale), 10);
    }
  } else if (flexibleEl) {
    const content = flexibleEl.getAttribute('content');

    if (content) {
      const initialDpr = content.match(/initial-dpr=([\d.]+)/);
      const maximumDpr = content.match(/maximum-dpr=([\d.]+)/);

      if (initialDpr) {
        dpr = parseFloat(initialDpr[1]);
        scale = parseFloat((1 / dpr).toFixed(2));
      }

      if (maximumDpr) {
        dpr = parseFloat(maximumDpr[1]);
        scale = parseFloat((1 / dpr).toFixed(2));
      }
    }
  }

  if (!dpr && !scale) {
    const isIPhone = window.navigator.appVersion.match(/iphone/gi);
    const devicePixelRatio = window.devicePixelRatio;

    if (isIPhone) {
      // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
      if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
        dpr = 3;
      } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
        dpr = 2;
      } else {
        dpr = 1;
      }
    } else {
      // 其他设备下，仍旧使用1倍的方案
      dpr = 1;
    }

    scale = 1 / dpr;
  }

  docEl.setAttribute('data-dpr', "".concat(String(dpr)));

  if (!metaEl) {
    metaEl = doc.createElement('meta');
    metaEl.setAttribute('name', 'viewport');
    metaEl.setAttribute('content', "initial-scale=".concat(String(scale), ", maximum-scale=").concat(scale, ", minimum-scale=").concat(scale, ", user-scalable=no"));

    if (docEl.firstElementChild) {
      docEl.firstElementChild.appendChild(metaEl);
    } else {
      const wrap = doc.createElement('div');
      wrap.appendChild(metaEl);
      doc.write(wrap.innerHTML);
    }
  }
  function refreshRem() {
    const width = docEl.clientWidth || docEl.getBoundingClientRect().width;
    const rem: number = isMobile ? 100 * (width / 750) : 60;
    docEl.style.fontSize = `${rem}px`; // @ts-ignore

    if (window._customerStore) {
      window._customerStore.globalRem = width / 750;
    }
  } // resize在safari中，收缩屏幕的时候也会触发

  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  window.addEventListener(resizeEvt, function () {
    clearTimeout(tid);
    tid = window.setTimeout(refreshRem, 300);
  }, false);
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      clearTimeout(tid);
      tid = window.setTimeout(refreshRem, 300);
    }
  }, false);
  refreshRem();
};

export function getBaseUrl() {
  let baseUrl = ''
  if (location.hostname === 'localhost') {
    baseUrl = 'http://localhost:8000';
  } else {
    baseUrl = 'https://xingguozm.github.io/mobile'
  }
  return baseUrl;
}
export function jump2Page(url: string) {
  window.location.href = url;
}

export function getRootStyleProperty(key: string) {
  const root = document.querySelector(':root') as HTMLDivElement;
  return window.getComputedStyle(root).getPropertyValue(key);
}

export function setBodyStyleProperty(key: string, value: string) {
  document.body.style.setProperty(key, value)
}

export function getBodyStyleProperty(key: string) {
  return document.body.style.getPropertyValue(key)
}

export function getTargetElement(target: HTMLDivElement | MutableRefObject<HTMLDivElement> | string, defaultElement: HTMLDivElement) {

  if (!target) {
    return defaultElement;
  }

  let targetElement;
  if (typeof target === 'string') {
    targetElement = document.querySelector(target);
  } else if ('current' in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }

  return targetElement;
}

