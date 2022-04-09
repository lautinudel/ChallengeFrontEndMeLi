import React, {useState, useEffect} from 'react';
import MeliLogo from '../../assets/images/Logo_ML.png';
import Search from '../../assets/images/ic_Search.png';
import '../../assets/sass/components/SearchBar/searchBarStyles.scss'
import { useNavigate } from 'react-router-dom';

export default function SearchBarView(props) {
  //const { } = props;
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(()=> {
    const urlParams = new URLSearchParams(window.location.search);
    setSearch(urlParams.get('search'));  
  },[]);

  const onEnterPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    navigate({
      pathname: '/items',
      search: `?search=${search}`,
    })
  }


  return (
   <div className='search-root'>
       <img src={MeliLogo} alt="meli-logo" className='logo' onClick={() => navigate("/items")} />
       <input placeholder='Nunca dejes de buscar' className='input' onChange={event => setSearch(event.target.value)} onKeyDown={onEnterPress} value={search}/>
       <button >
           <img src={Search} alt="button-logo" onClick={handleSearch}/>
       </button>
   </div>
  );
}
