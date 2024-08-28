import { ConfigService } from "@nestjs/config";
import { config } from "dotenv";
import { DataSource, DataSourceOptions } from "typeorm";

config()

const configService = new ConfigService()

export const dataSourceOptions: DataSourceOptions =({
    type:'postgres',
    host:configService.get('HOST'),
    port:configService.get<number>('PORT'),
    username:'postgres',
    password:'0108159030',
    database:'system-management',
    entities:['dist/**/*.entity.js'],
    migrations:['dist/config/migrations/*.js'],
    synchronize:false
});
const dataSource = new DataSource(dataSourceOptions)
export default dataSource; 