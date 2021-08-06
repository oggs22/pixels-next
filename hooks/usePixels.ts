import { useState, useEffect } from 'react'
import { request, gql } from 'graphql-request'

const query = gql`
  query getPixels($lastBlock: String!, $skip: Int!) {
    pixels(first: 1000, skip: $skip, orderBy: lastChangeBlock, where: { lastChangeBlock_gte: $lastBlock }) {
      id
      owner
      color
      lastChangeBlock
    }
  }
`

export default function usePixels() {
    let pixels1;

    const fetchAll = async () => {
        const pixels = await (await fetch(window.origin + '/api/getPixels')).json()
        pixels1 = pixels
        const lastBlock = pixels.reduce((a: any, b: any) => {
          const aInt = typeof a === 'bigint' ? a : BigInt(a.lastChangeBlock);
          const bInt = typeof b === 'bigint' ? b : BigInt(b.lastChangeBlock)
          if (aInt > bInt) {
            return aInt;
          }
          return bInt;
        }).toString();
        return { pixels, lastBlock }
      }


    useEffect(() => {
        fetchAll()
    }, [])

    return { data : pixels1 }

}