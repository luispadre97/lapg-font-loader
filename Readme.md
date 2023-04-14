## Uso de FontLoader

Para utilizar el FontLoader, sigue los siguientes pasos:

1. Descarga el archivo fontSdk.js: Este archivo contiene la lógica necesaria para cargar y aplicar las fuentes especificadas en tu proyecto.

2. En tu archivo HTML, agrega una etiqueta script que enlace al archivo fontSdk.min.js:

   ```javascript
   <script src="https://cdn.jsdelivr.net/gh/luispadre97/lapg-font-loader@main/dist/fontSdk.min.js"></script>
   ```

3. Define un objeto de opciones con las fuentes que deseas cargar y cualquier otra configuración que desees cambiar. Las opciones son:

   - `fonts`: Un arreglo de objetos que contiene el nombre y la URL de cada fuente que deseas cargar.
   - `fallbackFonts`: Un arreglo de nombres de fuente que se utilizarán como alternativas si las fuentes principales no se cargan correctamente.
   - `cache`: Un valor booleano que determina si las fuentes deben almacenarse en caché o no.
   - `preload`: Un valor booleano que determina si se debe precargar las fuentes o no.

   ```javascript
   const options = {
   	fonts: [
   		{
   			name: "Open Sans",
   			url: "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",
   		},
   		{
   			name: "Roboto",
   			url: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
   		},
   	],
   	fallbackFonts: ["sans-serif"],
   	cache: false,
   	preload: true,
   }
   ```

4. Llama a la función `loadFonts()` y pasa el objeto de opciones como argumento:

   ```javascript
   loadFonts(options)
   	.then(() => {
   		console.log("Fuentes cargadas correctamente.")
   	})
   	.catch((error) => {
   		console.error("Error al cargar las fuentes:", error)
   	})
   ```

5. Maneja la promesa devuelta por la función `loadFonts()`. Si las fuentes se cargan correctamente, la promesa se resolverá. De lo contrario, se rechazará y se devolverá un error.

6. Dentro de la promesa resuelta, puedes acceder a las fuentes cargadas y su nombre de familia de fuente a través del objeto de fuente devuelto.

7. Finalmente, puedes aplicar las fuentes cargadas a tu página utilizando CSS:

   ```scss
   body {
   	font-family: "Open Sans", sans-serif;
   }

   h1 {
   	font-family: "Roboto", sans-serif;
   }
   ```

## Uso de FontLoader con Vue

Para usar el FontLoader con React, primero debes instarlo mediante este comando

```
npm install lapg-font-loader
```

y llamarlo posteriormente implementarlo import loadFonts from 'lapg-font-loader' en tu componente de Vue. Luego, en el método `mounted()` del componente, llama a la función `loadFonts()` y pásale el objeto de opciones como argumento. Finalmente, en el bloque `style` de tu componente, puedes aplicar las fuentes cargadas utilizando CSS.

Aquí tienes un ejemplo de cómo se vería el componente Vue:

```vue
<script setup>
	import { onMounted } from "vue"
	import loadFonts from "lapg-font-loader"

	onMounted(() => {
		const options = {
			fonts: [
				{
					name: "Roboto",
					url: "https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxP.ttf",
				},
				{
					name: "Lato",
					url: "https://fonts.gstatic.com/s/lato/v20/S6uyw4BMUTPHjx4wXg.woff2",
				},
				{
					name: "Open Sans",
					url: "https://fonts.gstatic.com/s/opensans/v23/memnYaGs126MiZpBA-UFUKWyV9hmIqOjjg.woff2",
				},
			],
			fallbackFonts: ["sans-serif"],
			cache: false,
			preload: true,
		}

		loadFonts(options)
			.then(() => {
				console.log("Fuentes cargadas correctamente.")
			})
			.catch((error) => {
				console.error("Error al cargar las fuentes:", error)
			})
	})
</script>

<template>
	<div >
		<h1>¡Hola mundo!</h1>
		<p>
			Este es un ejemplo de cómo cambiar el tema de una página web con LAPG en
			Vue 3.
		</p>
		<button >Cambiar tema</button>
	</div>
</template>

<style scoped>
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
		transition: filter 300ms;
	}

	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}

	.logo.vue:hover {
		filter: drop-shadow(0 0 2em #42b883aa);
	}
	h1 {
		font-family: "Roboto", sans-serif;
	}
	p {
		font-family: "Lato", sans-serif;
	}
	button {
		font-family: "Open Sans", sans-serif;
	}
</style>
```

## Uso de FontLoader con React

Para usar el FontLoader con React, primero debes instarlo mediante este comando

```
npm install lapg-font-loader
```

y llamarlo posteriormente implementarlo import loadFonts from 'lapg-font-loader';
en tu componente de React. Luego, dentro del hook useEffect(), llama a la función loadFonts() y pásale el objeto de opciones como argumento. Finalmente, en el archivo CSS, puedes aplicar las fuentes cargadas utilizando CSS.

Aquí tienes un ejemplo de cómo se vería el componente de React con Hooks:

```react
React, { useEffect } from 'react';
import loadFonts from 'lapg-font-loader';

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

    loadFonts(options)
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
	font-family: "Roboto", sans-serif;
}
p {
	font-family: "Lato", sans-serif;
}
small {
	font-family: "Open Sans", sans-serif;
}
```
