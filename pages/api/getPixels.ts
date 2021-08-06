import { request, gql } from 'graphql-request'
import { Pixel } from '../../models/pixel.model'
import { IPixels, IPixel } from '../../types/Pixel'
 
const query = gql`
  query getPixels($lastID: String!) {
    pixels(first: 1000, orderBy: id, where: { id_gt: $lastID }) {
      id
      owner
      color
      lastChangeBlock
    }
  }
`

const requestAll = async () => {
  let all : IPixels[] = [];
  let lastID = '0';
  for (var i = 0; i < 1001; i++) {
    const result = await request('https://api.thegraph.com/subgraphs/name/squeakvulcan/million-pixels', query, {
      lastID
    })

    if (result.pixels.length === 0) {
      break
    }
    all = all.concat(result.pixels)
    lastID = result.pixels.reduce((a: any, b: any) => {
      const aInt = typeof a === 'bigint' ? a : BigInt(a.id);
      const bInt = typeof b === 'bigint' ? b : BigInt(b.id)
      if (aInt > bInt) {
        return aInt;
      }
      return bInt;
    }).toString()
  }
  return all.slice(1).reduce((arr: any, b: any) => {
    if (!arr.find( (a:any) => a.id === b.id)) { return [...arr, b] } return arr;
  }, [])
}

const handleRequest = async (req: any, res: any ) => {
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
  return res.json(await requestAll())
}

export default handleRequest
