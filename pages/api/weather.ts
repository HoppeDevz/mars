// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { WeatherResponse } from '../../@types/WeatherResponse';

export default function handler(req: NextApiRequest, res: NextApiResponse<WeatherResponse>) {


  res.status(200).json({
      
      currentSol: "1098",

      min: -156,
      max: -15
  })
}
