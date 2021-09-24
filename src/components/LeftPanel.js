import React from 'react';

const LeftPanel = ({ data, setRightPanel }) => {
  console.log('data', data);
  return (
    <>
      <ul>
        {data.map((ele, i) => (
          <li key={ele}>
            <button
              onClick={() => {
                setRightPanel(i);
              }}
            >
              {ele}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LeftPanel;
