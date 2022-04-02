import React from 'react';
import MeliLogo from '../../assets/images/Logo_ML.png';
import Search from '../../assets/images/ic_Search.png';
import '../../assets/sass/components/SearchBar/searchBarStyles.scss'

export default function SearchBarView(props) {
  //const { } = props;

  return (
   <div className='search-root'>
       <img src={MeliLogo} alt="meli-logo" className='logo'/>
       <input placeholder='Nunca dejes de buscar' className='input'/>
       <button >
           <img src={Search} alt="button-logo"/>
       </button>
   </div>
  );
}
