import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { routes } from './routes';

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.database();
        this.routes();
    }

    public middleware() {
        this.express.use(express.json());
        this.express.use(cors({ origin: 'http://10.26.15.79:3002' }));
        this.express.use(express.static(path.join(__dirname, '../../frontend'))); 
    }

    public async database() {
        try {
            await mongoose.connect('mongodb://127.0.0.1:27017/aep-educacao-qualidade');
            console.log("Sucesso ao conectar com o banco de dados");
        } catch (error) {
            console.error("Não foi possível conectar na base de dados:", error);
        }
    }

    public routes() {
        this.express.use(routes);
    }
}

export default new App().express;
