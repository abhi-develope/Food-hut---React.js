import styled from "styled-components";
import { useEffect, useState } from "react";
import SearchResult from "./components/SearchResult";
import { FaPizzaSlice } from "react-icons/fa6";

export const BASE_URL = "http://localhost:9000";


const App = () => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
       const response = await fetch(BASE_URL);
       const json = await response.json();
   
       setData(json);
       setFilteredData(json);
      } catch (error) {
       seterror("unable to fetch data")
      }
   
     }

     fetchFoodData();

  }, [])

   const searchFood = (e) => {
    const searchValue = e.target.value;

    console.log(searchValue);
    if (searchValue === "") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredData(filter);

   }

   const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase()))
    setFilteredData(filter);
    setSelectedBtn(type);
    console.log(filter);
   }

   const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
   ]


  if (error) return <div>{error}</div>
  if (loading) return <div>loading...</div>

 

  return (
    <>
    <Container>
      <TopContainer>
        <div className="logo">
         <img src="./logo.png" alt="" />

        </div>
        <div className="search">
          <input onChange={searchFood} placeholder="Search Food" />
        </div>
      </TopContainer>

     <FilterContainer>
       {
        filterBtns.map((value) => (
          <Button key={value.name} onClick={() => filterFood(value.type)}>{value.name}</Button>
        ))
      } 

      
      
      </FilterContainer>
    </Container>
    <SearchResult data = {filteredData}/>
   
    </>
  )
}

export default App

export const  Container = styled.div`
 max-width: 1200px;
 margin: 0 auto;
`;
const TopContainer = styled.section`
  height: 90px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  
  .logo
  {
    span{
    color: red;
      
  } 
    
  }

  .logo{
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
    background: #ec1d1df6;
    border-radius: 5px;
    border: none;
    padding: 6px 12px;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: red ;
    }
  `

  
  


