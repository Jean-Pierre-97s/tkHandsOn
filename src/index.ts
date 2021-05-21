import App from './App/app';
import { connect, disconnect } from './Infra/Database/database'

Promise.resolve().then(() => {
    connect();
}).then(() => {
    App.start();
}).catch((e) => {
    console.log(e);
    disconnect();
});

