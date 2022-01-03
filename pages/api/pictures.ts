// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
import { NASA_API_KEY } from '../../settings/index.json';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {

        const { camera, rover } = req.body;

        const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&api_key=${NASA_API_KEY}${camera == "ALL" ? "" : `&camera=${camera}`}`)

        console.log(response.data.photos)

        const filter = response.data.photos.filter((item: any) => item.img_src);

        res.status(200).json({photos: filter});

    } catch(err) {

        res.status(500).send({ err });
    }
}
