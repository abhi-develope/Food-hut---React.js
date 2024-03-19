import styled from "styled-components";


const App = () => {
  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/logo2.png" alt="logo2" />
        </div>
        <div className="search">
          <input placeholder="Search Food" />
        </div>
      </TopContainer>

     <FilterContainer>
      <Button>All</Button>
      <Button>Breakfast</Button>
      <Button>Lunch</Button>
      <Button>Dinner</Button>
      </FilterContainer>

      <FoodContainer>
        <FoodCards></FoodCards>
      </FoodContainer>
    </Container>
  )
}

export default App

const  Container = styled.div`
 max-width: 1200px;
 margin: 0 auto;
`;
const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
  `;
 
  const FilterContainer = styled.section`
     display: flex;
     justify-content: center;
     gap: 12px;
  `
  const Button = styled.button`
    background: #351E3B;
    border-radius: 5px;
    border: none;
    padding: 6px 12px;
    color: white;
  `

  const FoodContainer = styled.section``
  const FoodCards = styled.div``


