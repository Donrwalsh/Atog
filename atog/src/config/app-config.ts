import * as dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/../../.env`});


export const movieKey = process.env.OMDB_API_KEY || '';