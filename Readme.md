## Uso de FontLoaderSDK

Para utilizar el FontLoaderSDK, sigue los siguientes pasos:

1. Descarga el archivo fontSdk.js: Este archivo contiene la lógica necesaria para cargar y aplicar las fuentes especificadas en tu proyecto.

2. En tu archivo HTML, agrega una etiqueta script que enlace al archivo fontSdk.js:

   ```javascript
   <script src="https://cdn.jsdelivr.net/npm/lapg-font-loader/dist/fontSdk.min.js"></script>
   ```

3. Define un objeto de opciones con las fuentes que deseas cargar y cualquier otra configuración que desees cambiar. Las opciones son:

   - `fonts`: Un arreglo de objetos que contiene el nombre y la URL de cada fuente que deseas cargar.
   - `fallbackFonts`: Un arreglo de nombres de fuente que se utilizarán como alternativas si las fuentes principales no se cargan correctamente.
   - `cache`: Un valor booleano que determina si las fuentes deben almacenarse en caché o no.
   - `preload`: Un valor booleano que determina si se debe precargar las fuentes o no.

   ```javascript
   const options = {
     fonts: [
       { name: 'Open Sans', url: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap' },
       { name: 'Roboto', url: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap' }
     ],
     fallbackFonts: ['sans-serif'],
     cache: false,
     preload: true
   };
   ```

4. Llama a la función `loadFontsSdk()` y pasa el objeto de opciones como argumento:

   ```javascript
   loadFontsSdk(options)
     .then(() => {
       console.log('Fuentes cargadas correctamente.');
     })
     .catch(error => {
       console.error('Error al cargar las fuentes:', error);
     });
   ```

5. Maneja la promesa devuelta por la función `loadFontsSdk()`. Si las fuentes se cargan correctamente, la promesa se resolverá. De lo contrario, se rechazará y se devolverá un error.

6. Dentro de la promesa resuelta, puedes acceder a las fuentes cargadas y su nombre de familia de fuente a través del objeto de fuente devuelto.

7. Finalmente, puedes aplicar las fuentes cargadas a tu página utilizando CSS:

   ```scss
   body {
     font-family: 'Open Sans', sans-serif;
   }
   
   h1 {
     font-family: 'Roboto', sans-serif;
   }
   ```



## Usando el SDK con Vue

Para usar el SDK con Vue, primero debes importar el archivo `fontSdk.js` en tu componente de Vue. Luego, en el método `mounted()` del componente, llama a la función `loadFontsSdk()` y pásale el objeto de opciones como argumento. Finalmente, en el bloque `style` de tu componente, puedes aplicar las fuentes cargadas utilizando CSS.

Aquí tienes un ejemplo de cómo se vería el componente Vue:

```vue
<template>
  <div>
    <h1>Este es un título con la fuente "Roboto".</h1>
    <p>Este es un texto con la fuente "Lato".</p>
    <small>Este es un texto con la fuente "Open Sans".</small>
  </div>
</template>

<script>
  import loadFontsSdk from 'lapg-font-loader';

  export default {
    mounted() {
      const options = {
        fonts: [
          { name: 'Roboto', url: 'https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxP.ttf' },
          { name: 'Lato', url: 'https://fonts.gstatic.com/s/lato/v20/S6uyw4BMUTPHjx4wXg.woff2' },
          { name: 'Open Sans', url: 'https://fonts.gstatic.com/s/opensans/v23/memnYaGs126MiZpBA-UFUKWyV9hmIqOjjg.woff2' },
        ],
        fallbackFonts: ['sans-serif'],
        cache: false,
        preload: true,
      };

      loadFontsSdk(options)
        .then(() => {
          console.log('Fuentes cargadas correctamente.');
        })
        .catch(error => {
          console.error('Error al cargar las fuentes:', error);
        });
    },
  };
</script>

<style>
  h1 {
    font-family: 'Roboto', sans-serif;
  }
  p {
    font-family: 'Lato', sans-serif;
  }
  small {
    font-family: 'Open Sans', sans-serif;
  }
</style>
```



## Usando el SDK con React Hooks

Para usar el SDK con React Hooks, primero debes importar el archivo fontSdk.js en tu componente de React. Luego, dentro del hook useEffect(), llama a la función loadFontsSdk() y pásale el objeto de opciones como argumento. Finalmente, en el archivo CSS, puedes aplicar las fuentes cargadas utilizando CSS.

Aquí tienes un ejemplo de cómo se vería el componente de React con Hooks:

```react
React, { useEffect } from 'react';
import loadFontsSdk from 'lapg-font-loader';

function App() {
  useEffect(() => {
    const options = {
      fonts: [
        { name: 'Roboto', url: 'https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxP.ttf' },
        { name: 'Lato', url: 'https://fonts.gstatic.com/s/lato/v20/S6uyw4BMUTPHjx4wXg.woff2' },
        { name: 'Open Sans', url: 'https://fonts.gstatic.com/s/opensans/v23/memnYaGs126MiZpBA-UFUKWyV9hmIqOjjg.woff2' },
      ],
      fallbackFonts: ['sans-serif'],
      cache: false,
      preload: true,
    };

    loadFontsSdk(options)
      .then(() => {
        console.log('Fuentes cargadas correctamente.');
      })
      .catch(error => {
        console.error('Error al cargar las fuentes:', error);
      });
  }, []);

  return (
    <div>
      <h1>Este es un título con la fuente "Roboto".</h1>
      <p>Este es un texto con la fuente "Lato".</p>
      <small>Este es un texto con la fuente "Open Sans".</small>
    </div>
  );
}

export default App;
```

En el archivo CSS, puedes aplicar las fuentes cargadas utilizando CSS de la siguiente manera:

```css
h1 {
  font-family: 'Roboto', sans-serif;
}
p {
  font-family: 'Lato', sans-serif;
}
small {
  font-family: 'Open Sans', sans-serif;
}
```



