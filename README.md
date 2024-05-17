# AYC
API for ommunity platform for akurinu-youth.com

## Tech Stack
* Node JS
* Express
* MySQL
* Sequelize ORM



## Setup

### 1. Installation

```bash
git clone https://github.com/DevSheila/akurinu-youth-api.git
```

```bash
cd akurinu-youth-api
```

```bash
npm install
```

### 2. Setup config
Go to  config file in root
```bash 
/app/config/dbConfig.js
```

```bash
module.exports = {
  HOST: "dbHost e.g localhost",
  USER: "dbUser e.g root",
  PASSWORD: "dbPassword e.g password",
  DB: "dbName e.g ayc ",
  dialect: "dyType e.g mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
  
};

```

### 3. Run app
```bash
npm run start
```
App will run on port 8080 locally

### 4. Deploy to cpanel

- Select all files in root except the node_modules folder.
- Zip selected files into one folder.
- Upload zipped folder to cpanel folder for api in cpanel file manager

