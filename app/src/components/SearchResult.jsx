import styled from "styled-components"

const SearchResult = ({data}) => {
  return (
    <div>
  <FoodContainer>
    <FoodCards></FoodCards>
  </FoodContainer>
    </div>
  )
}

export default SearchResult

const FoodContainer = styled.section`
      height: calc(100vh - 260px);
      background-image : url("/bgimage2.jpg") ;
      background-size: cover;
  `

 const FoodCards = styled.div`
    
    
 `
