(function (global) {

  function loadFontsSdk(options) {
    const defaultOptions = {
      fonts: [],
      fallbackFonts: ['sans-serif'],
      cache: false,
      preload: false,
      alternativeFonts: [],
      customFontRepositories: [],
      loadAlternativeFonts: false,
    };

    options = Object.assign({}, defaultOptions, options);

    function loadFontFace(font) {
      const fontFace = new FontFace(font.name, "url(" + font.url + ")", {
        cache: options.cache ? 'default' : 'no-store',
      });

      if (options.preload) {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.as = 'font';
        preloadLink.href = font.url;
        preloadLink.type = 'font/woff2';
        document.head.appendChild(preloadLink);
      }

      return fontFace.load().then(function (loadedFont) {
        document.fonts.add(loadedFont);
        return loadedFont;
      });
    }

    function loadPrimaryFont(font) {
      return loadFontFace(font).catch(() => {
        if (options.loadAlternativeFonts) {
          const alternativeFont = options.alternativeFonts.find(altFont => altFont.name === font.name);
          if (alternativeFont) {
            return loadFontFace({
              name: alternativeFont.name,
              url: alternativeFont.url,
              cache: options.cache ? 'default' : 'no-store'
            });
          } else {
            return Promise.reject(new Error(`Failed to load primary font "${font.name}" and no alternative font found.`));
          }
        } else {
          return Promise.reject(new Error(`Failed to load primary font "${font.name}" and alternative fonts are disabled.`));
        }
      });
    }

    const fontPromises = options.fonts.concat(options.customFontRepositories).map(function (font) {
      if (typeof font === 'string') {
        return loadPrimaryFont({ name: font, url: font });
      } else {
        return loadPrimaryFont(font);
      }
    });

    return Promise.all(fontPromises).then(function (loadedFonts) {
      try {
        const fontFamily = loadedFonts.map(function (font) {
          return font.family;
        }).concat(options.fallbackFonts).join(', ');
        console.log('Fuentes aplicadas:', fontFamily);

        document.body.style.fontFamily = fontFamily;
      } catch (e) {
        console.error(e);
      }
    });
  }

  global.loadFontsSdk = loadFontsSdk;
})(window);

export default loadFontsSdk;