import React, {useEffect, useState} from "react";
import "../../assets/sass/components/ItemList/itemListStyles.scss";
import Breadcrumb from "../common/breadcrumbsView.jsx";
import Item from "./itemView.jsx";

export default function ItemListView(props) {
  //const { } = props;
  const [search, setSearch] = useState(null);

  useEffect(()=> {
    const urlParams = new URLSearchParams(window.location.search);
    setSearch(urlParams.get('search'));  
  },[])


  const categories = ["Juguetes", "Funkos"]
  const items = [
    {
      id: "1",
      title: "Muñeco Spiderman Vs Hombre Araña Pop Sin Mascara Funko# 221",
      price: {
        currency: "$",
        amount: 1796,
        decimals: 50,
      },
      picture: "https://http2.mlstatic.com/D_NQ_NP_735195-MLA47752719053_102021-V.webp",
      condition: "Nuevo",
      free_shipping: true,
      address: "Capital Federal",
    },
    {
      id: "2",
      title: "Figura de acción Star Wars The Child con galleta The Mandalorian 54531 de Funko Pop!",
      price: {
        currency: "$",
        amount: 5276,
        decimals: 0,
      },
      picture: "https://http2.mlstatic.com/D_NQ_NP_956706-MLA49180495009_022022-V.webp",
      condition: "Nuevo",
      free_shipping: true,
      address: "Mendoza",
    },
    {
      id: "3",
      title: "Funko Pop! With Purpose Spongebob Squarepants - Spongebob Se",
      price: {
        currency: "$",
        amount: 20,
        decimals: 70,
      },
      picture: "https://http2.mlstatic.com/D_NQ_NP_640050-MLA49134063132_022022-V.webp",
      condition: "Nuevo",
      free_shipping: false,
      address: "Santa Fe",
    },
    {
      id: "4",
      title: "Funko Pop! With Purpose Spongebob Squarepants - Spongebob Se",
      price: {
        currency: "$",
        amount: 6490,
        decimals: 0,
      },
      picture: "https://http2.mlstatic.com/D_NQ_NP_956706-MLA49180495009_022022-V.webp",
      condition: "Nuevo",
      free_shipping: true,
      address: "Mendoza",
    },
  ];

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
