import React, { useEffect, useState } from "react";
import "../../assets/sass/components/itemDetails/itemDetailsStyles.scss";
import Breadcrumb from "../common/breadcrumbsView.jsx";
import { useParams } from "react-router-dom";
import { getItemDetails } from "../../api";
import MeliLogo from "../../assets/images/Logo_ML@2x.png.png.png";
import LoaderScreenView from "../LoadingScreen/loadingScreenView";

export default function ItemDetailsView(props) {
  //const { } = props;
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(null);

  useEffect(() => {
    setLoading(true);
    if (id) {
      getItemDetails(id)
        .then(({ data }) => {
          setItem(data?.item);
          setLoading(false);
        })
        .catch((err) => {console.log(err); setLoading(false);});
    } else {
      resetStates();
    }
  }, [id]);

  const resetStates = () => {
    setItem(null);
    setLoading(false);
  };

  return (
    <div className="item-details-root">
      <div className="item-details-secondary">
        <Breadcrumb categories={item?.categories || []} />
        <div className="item-details-container">
          {loading ? (
            <LoaderScreenView />
          ) : (
            <>
              {item ? (
                <>
                  <div className="item-details-info">
                    <img
                      src={item?.picture}
                      alt="item"
                      className="preview-image"
                    />
                    <div className="item-details-price">
                      <p className="condition-label">
                        {item?.condition} - {item?.sold_quantity} vendidos
                      </p>
                      <p className="title-label">{item?.title}</p>
                      <p className="price-label">
                        {item?.price?.currency} ${item?.price?.amount}
                        {item?.price?.decimals
                          ? "," + item?.price?.decimals
                          : ""}
                      </p>
                      <button
                        className="buy-button"
                        onClick={() => alert("Comprado!")}
                      >
                        Comprar
                      </button>
                    </div>
                  </div>

                  <div className="item-details-description">
                    <h3 className="subtitle-label">Descripcion del producto</h3>
                    <p className="description">{item?.description ? item?.description : "Este producto no tiene descripcion"}</p>
                  </div>
                </>
              ) : (
                <div className="default-container">
                  <img src={MeliLogo} alt="button-logo" />
                  <h3 className="default-label">
                    No pudimos encontrar tu producto :(
                  </h3>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
