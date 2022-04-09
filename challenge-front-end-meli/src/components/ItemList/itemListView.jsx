import React, {useEffect, useState} from "react";
import "../../assets/sass/components/ItemList/itemListStyles.scss";
import Breadcrumb from "../common/breadcrumbsView.jsx";
import Item from "./itemView.jsx";
import {getItems} from '../../api'
import { useLocation } from 'react-router-dom';

export default function ItemListView(props) {
  //const { } = props;
  const [search, setSearch] = useState(null);
  const [items, setItems] = useState([]);
  const pathname = useLocation();

  useEffect(()=> {
    const urlParams = new URLSearchParams(window.location.search);
    setSearch(urlParams.get('search')); 
  },[pathname])

  useEffect(() => {
    if(search){
      getItems(search).then(({ data }) => {
        setItems(data.items);
      }).catch((err)=>console.log(err));
    }
  }, [search]);


  const categories = ["Juguetes", "Funkos"]


  return (
    <div className="item-list-root">
      <div className="item-list-secondary">
        {categories?.length > 0 && <Breadcrumb categories={categories} />}
        <div className="item-list-container">
          {items?.length > 0 ? items?.map((item, index) => {
            return (
              <div key={index}>
                <Item item={item} />
                {index + 1 < items.length && <hr className="divider" />}
              </div>
            );
          })
        :
          <>
          {search ?
            <h3 className="default-label">No se encontraron elementos</h3> 
            :
            <h3 className="default-label">Realiza una busqueda para comenzar :)</h3>
          }
          </>
        }
        </div>
      </div>
    </div>
  );
}
