import express from 'express';
const App = express();
const Port = 3001;


const Server = {
  App,
  listen() {
    this.App.listen(Port, () => {
      console.log('http://localhost:3001/company');
    });
  },
};

module.exports = Server;
