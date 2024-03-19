import styled from "styled-components";


const App = () => {
  return (
    <MainContainer>
      <TopContainer>
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="search">
          <input type="search" placeholder="Search Food" />
        </div>
      </TopContainer>
    </MainContainer>
  )
}

export default App

const  MainContainer = styled.div``;
const TopContainer = styled.section``;
