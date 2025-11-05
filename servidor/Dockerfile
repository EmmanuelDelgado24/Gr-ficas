# Usa la imagen oficial de Node.js como base.
# La versión 22.0.0-alpine3.19 es una buena opción, ya que es ligera.
FROM node:22.0.0-alpine3.19 AS build

# Establece el directorio de trabajo dentro del contenedor.
# Aquí es donde se copiarán todos los archivos de tu aplicación.
WORKDIR /app

# Copia los archivos de configuración de dependencias.
# Esto es crucial para aprovechar el cache de Docker. Si estos archivos no cambian,
# Docker no volverá a ejecutar 'npm ci', lo que acelera las compilaciones.
COPY package*.json ./

# Instala las dependencias del proyecto.
# 'npm ci' es más seguro y reproducible que 'npm install' para CI/CD.
# Usamos '--only=production' para instalar solo las dependencias necesarias
# para la ejecución, lo que reduce el tamaño de la imagen final.
RUN npm ci --only=production

# Copia el resto del código de la aplicación.
# Debido a que ya instalamos las dependencias, solo necesitamos copiar el código fuente.
# Esto mantiene la capa de dependencias separada, mejorando la eficiencia del cache.
COPY . .

# Expone el puerto que usará tu aplicación.
# Esto no publica el puerto, solo documenta qué puerto se debe exponer
# al ejecutar el contenedor.
# FROM nginx:1.23.3 as prod
EXPOSE 3000

# Comando para ejecutar la aplicación.
# En lugar de solo 'npm start', es mejor usar un comando que no dependa
# de la capa de shell, lo que es una práctica de seguridad recomendada.
# 'node server.js' o el archivo de entrada principal es una buena alternativa.
CMD ["npm", "start"]
