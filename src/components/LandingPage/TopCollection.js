import React from "react";

const TopCollection = () => {
  return (
    <>
      <div>
        <h2>
          <label for="collections">Top Collections</label>
          <select name="collections" id="collection">
            <option value="collections">Collections</option>
            <option value="sellers">Sellers</option>
          </select>
        </h2>
      </div>

      <div>
        <ul>
          <li>1 day</li>
          <li>7 days</li>
          <li>30 days</li>
        </ul>
      </div>

      <div>
        <select name="currency" id="currency">
          <option value="ethereum">Ethereum</option>
          <option value="flow">Flow</option>
          <option value="solana">Solana</option>
          <option value="polygon">Polygon</option>
        </select>
      </div>

      <div>
          <ol>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
          </ol>
      </div>

      <div>
          <button>See all collections</button>
      </div>
    </>
  );
};

export default TopCollection;
