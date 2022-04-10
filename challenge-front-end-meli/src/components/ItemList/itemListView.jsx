import React, { useEffect, useState } from "react";
import "../../assets/sass/components/ItemList/itemListStyles.scss";
import Breadcrumb from "../common/breadcrumbsView.jsx";
import Item from "./itemView.jsx";
import { getItems } from "../../api";
import { useLocation } from "react-router-dom";
import LoaderScreenView from "../LoadingScreen/loadingScreenView";
import MeliLogo from '../../assets/images/Logo_ML@2x.png.png.png';

export default function ItemListView(props) {
  //const { } = props;
  const [search, setSearch] = useState(null);
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const pathname = useLocation();

  useEffect(() => {
    setLoading(true);
    if (search) {
      getItems(search)
        .then(({ data }) => {
          setItems(data.items);
          setCategories(data.categories);
          setLoading(false);
        })
        .catch((err) => {console.log(err);  setLoading(false);});
    }else{
      resetStates();
    }
  }, [search]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setSearch(urlParams.get('search')); 
  }, [pathname]);

  const resetStates = () => {
    setSearch(null);
    setItems([]);
    setCategories([]);
    setLoading(false);
  }

  return (
    <div className="item-list-root">
      <div className="item-list-secondary">
        <Breadcrumb categories={categories}/>
        <div className="item-list-container">
          {loading ? (
           <LoaderScreenView/>
          ) : (
            <>
              {items?.length > 0 ? (
                items?.map((item, index) => {
                  return (
                    <div key={index}>
                      <Item item={item} />
                      {index + 1 < items.length && <hr className="divider" />}
                    </div>
                  );
                })
              ) : (
                <>
                  {search ? (
                    <h3 className="default-label">
                      No se encontraron elementos
                    </h3>
                  ) : (
                    <div className="default-container">
                       <img src={MeliLogo} alt="button-logo" />
                       <h3 className="default-label">
                        Realiza una busqueda para comenzar :)
                      </h3>
                    </div>

                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
