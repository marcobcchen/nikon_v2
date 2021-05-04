import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

function Error() {
  return (
    <Container>
      <h2>抱歉無此頁面！</h2>
    </Container>
  );
}

export default Error;
