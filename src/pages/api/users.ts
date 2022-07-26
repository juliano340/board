import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {

    const users = [
        {key: 1, nome: 'Juliano'},
        {key: 2, nome: 'Ana'},
        {key: 3, nome: 'Pedro'},
        {key: 4, nome: 'Cesar'},
    ];

    return res.json(users);


}