const mysql = require('mysql2');

const connection = mysql.createConnection({
                              //  my local machine DB credentials
  // host: 'localhost',
  // user: 'root',
  // password: 'Beast@123@',
  // database: 'leaderboard',
  // port: 3306
                          // remote DB credentials  
  host: 'roundhouse.proxy.rlwy.net',
  user: 'root',
  password: 'Be6fDgBbg2eh21-e-5dCeAa33FfBg-C1',
  database: 'railway',
  port: 25819
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');

  // Generate and insert 10,000 rows of data
  for (let i = 0; i < 10000; i++) {
    const uid = generateUID();
    const name = generateRandomName();
    const score = generateRandomScore();
    const country = generateRandomCountryCode();
 
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    
    const timestamp = randomDate.toISOString().slice(0, 19).replace(' T ', ' ');

    const insertQuery = `INSERT INTO score_card (UID, Name, Score, Country, TimeStamp) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE Name = VALUES(Name), Score = VALUES(Score), Country = VALUES(Country), TimeStamp = VALUES(TimeStamp);`
    const dataToInsert = [uid, name, score, country, timestamp];

    connection.query(insertQuery, dataToInsert, (err, results) => {
      if (err) {
        console.error('Error inserting data:', err);
        return;
      }
  
    });
  }


  connection.end();
});

const generateUID = () => {

  return  Math.floor(Math.random() * 10000);
};

const generateRandomName = () => {

  const names = ['Prafull', 'Ravi', 'Gaurava', 'Aditya', 'Denzil', 'Frank', 'Grace', 'Harry', 'Ivy', 'Jethaji', 'Bhide', 'Natwar', 'Natkhat', 'Sohail', 'Maalik', 'Savita', 'Babloo', 'Ramesh', 'Gaurav', 'Daneil', 'Kavita', 'Komal', 'Rahul', 'Ahem'];
  return names[Math.floor(Math.random() * names.length)];
};

const generateRandomScore = () => {
  return Math.floor(Math.random() * 100);
};

const generateRandomCountryCode = () => {

  const countryCodes = [ 'DE', 'FR', 'IT', 'ES', 'JP', 'AU', 'BR','PK','IN','CN', 'NP', 'CD','AR','SA', 'EN', 'NZ', 'RU', 'PL','ZU','BD'];
  return countryCodes[Math.floor(Math.random() * countryCodes.length)];
};