import { Sequelize } from 'sequelize';
import { IPostgresSql } from 'src/interfaces/IPostgresGateway';
console.log(process.env.DATABASE_URL)
// Option 1: Passing a connection URI
 // Example for postgres

export class PostgresSql implements IPostgresSql{
    constructor(){
        this.connect();
        
    }
    private _sequelize = new Sequelize("postgresql://kevinmalats_gmail_:mhO15W1vauWZtIMTxmmSfQ@cuddly-rugrat-2403.g8z.cockroachlabs.cloud:26257/testKevinMalatsdb?sslmode=verify-full&options=--cluster%3Dcuddly-rugrat-2403");
    
    public get sequelize() {
      return this._sequelize;
    }
    private connect = async  () => {
        try {
            await this.sequelize.authenticate();
            console.log('Connection has been established successfully.');
            await this._sequelize.sync();
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }
    public endConnection = async () =>{
       this.sequelize.close()
    }
}
