import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Search(props) {
  //searchInput, setFilterInput, hornList, handleChange, handleSearch

 return (
  <form className="filter-form" onSubmit={props.handleSearch}>
      
      
              <Form.Select aria-label="Default select example" onChange={(e) => props.setFilterInput(e.target.value)}>
                <option>Number of Horns</option>
          
            {
              props.hornList.map(x => {
                return <option key={x} value={x}>{x}</option>
              })
            }
              </Form.Select>
              
              
        <Form.Control type="text" placeholder="Search" value={props.searchInput} onChange={e => props.setSearchInput((e.target.value).toLowerCase())} />
        
        
        <Button type="submit">Search</Button>
        
       
      </form>
  )
}