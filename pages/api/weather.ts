// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
import { NASA_API_KEY } from '../../settings/index.json';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  try {

    const response = await axios.get(`https://api.nasa.gov/insight_weather/?api_key=${NASA_API_KEY}&feedtype=json&ver=1.0`);

    const currentSol = Object.entries(response.data)[0][0];
    const min = response.data[currentSol].AT.mn;
    const max = response.data[currentSol].AT.mx;

    res.status(200).json({
        currentSol,
        min,
        max
    })

  } catch(err) {

    res.status(500).send(err);
  }
  
}
