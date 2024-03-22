import styled from "styled-components";
import { useEffect, useState } from "react";
import SearchResult from "./components/SearchResult";
import { FaPizzaSlice } from "react-icons/fa6";

export const BASE_URL = "http://localhost:9000";


const App = () => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
       const response = await fetch(BASE_URL);
       const json = await response.json();
   
       setData(json);
      } catch (error) {
       seterror("unable to fetch data")
      }
   
     }

     fetchFoodData();

  }, [])

  console.log(data);


  if (error) return <div>{error}</div>
  if (loading) return <div>loading...</div>

 

  return (
    <>
    <Container>
      <TopContainer>
        <div className="logo">
          <h2>Foodhut</h2><FaPizzaSlice />

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
    </Container>
    <SearchResult data = {data}/>
   
    </>
  )
}

export default App

const  Container = styled.div`
 max-width: 1200px;
 margin: 0 auto;
`;
const TopContainer = styled.section`
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  
  .logo
  {
    
    color: white;
    font-family: "Taprom", system-ui;  
    
    
  }
  

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
     padding-bottom: 40px;
  `
  export const Button = styled.button`
    background: red;
    border-radius: 5px;
    border: none;
    padding: 6px 12px;
    color: white;
  `

  
  


