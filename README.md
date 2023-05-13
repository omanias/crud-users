# Node App - TS - Sequelize - MySQL

## **Users CRUD application created in NodeJs**

---

## Installations

```
npm init -y
tsc --init
```

---

## tsconfig.json

"target": "es2016"
"module": "commonjs"
"moduleResolution": "node"
"sourceMap": true
"outDir": "./dist"
"esModuleInterop": true
"forceConsistentCasingInFileNames": true
"strict": true
"skipLibCheck": true

---

```
npm i tslint --save-dev
npm i typescript --save-dev
```

---

```
./node_modules/.bin/tslint --init
```

---

tslint.json

```json
 "rules": {
    "no-console": false
  },
```

---

## Install express, cors & dotenv

```
npm i express cors dotenv
```

## Nodemon

```
npm i -g nodemon
```

Fix errors `import`

```
npm i --save-dev @types/express
npm i --save-dev @types/cors
```

```
npm install -g concurrently
```

Add to package.json:

```
"dev": "concurrently --kill-others \"tsc -w\" \"nodemon dist/app.js\""
```

---

## Run:

```
tsc --watch
npm run dev
```

---

To develop steps:

1. models
1. controllers
1. routes
1. db

---

## Sequelize & mysql2 installation

```
npm install --save sequelize
npm install --save mysql2
```
