import React from 'react'

const Header = () => {
  return (
      <>
    <div>
        <h1>
            Community-centric <br />NFT marketplace
        </h1>
    </div>
    <div>
        <input type="text" placeholder='Search by collection, NFT or user' />
    </div>
    <div>
        <ul>
            <li>Ethereum</li>
            <li>Flow</li>
            <li>Solana</li>
            <li>Tezos</li>
            <li>Polygon</li>
        </ul>
    </div>
    </>
  )
}

export default Header