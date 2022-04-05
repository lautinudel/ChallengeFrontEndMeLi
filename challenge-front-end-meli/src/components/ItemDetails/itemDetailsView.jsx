import React from "react";
import "../../assets/sass/components/itemDetails/itemDetailsStyles.scss";
import Breadcrumb from "../common/breadcrumbsView.jsx";

export default function ItemDetailsView(props) {
  //const { } = props;
  const categories = ["Juguetes", "Funkos"];
  const item = {
    id: "2",
    title:
      "Figura de acción Star Wars The Child con galleta The Mandalorian 54531 de Funko Pop!",
    price: {
      currency: "$",
      amount: 5276,
      decimals: 0,
    },
    picture:
      "https://http2.mlstatic.com/D_NQ_NP_956706-MLA49180495009_022022-V.webp",
    condition: "Nuevo",
    free_shipping: true,
    address: "Mendoza",
  };

  return (
    <div className="item-details-root">
      <div className="item-details-secondary">
        {categories?.length > 0 && <Breadcrumb categories={categories} />}
        <div className="item-details-container">
          <div className="item-details-info">
            <img src={item?.picture} alt="item" className="preview-image" />
            <div className="item-details-price">
              <p className="condition-label">
                {item?.condition} - 234 vendidos
              </p>
              <p className="title-label">{item?.title}</p>
              <p className="price-label">
                {item?.price?.currency}
                {item?.price?.amount},{item?.price?.decimals}
              </p>
              <button className="buy-button" onClick={() => alert("Comprado!")}>Comprar</button>
            </div>
          </div>

          <div className="item-details-description">
          <h3 className="subtitle-label">Descripcion del producto</h3>
            <p className="description">
              La empresa estadounidense Funko sostiene que "todos son fanáticos
              de algo". Por ende, se dedica a la creación de figuras
              coleccionables para generar felicidad a los fans de todas las
              edades. Materiales nobles Las figuras de acción están hechas de
              vinilo lo que asegura que sean amables y suaves al tacto,
              diferenciando las distintas texturas y relieves del cuerpo de los
              personajes. Ideal para coleccionistas Una de las actividades que
              podrás hacer con este tipo de figuras es coleccionarlas y
              guardarlas en un lugar especial. A medida que conozcas más y más,
              tu colección irá creciendo y será más variada. Con una cualidad
              especial Las figuras bobblehead son diferentes a todas las demás.
              Su cabeza de gran tamaño con respecto al resto del cuerpo hace que
              resalten entre las otras figuras que puedas coleccionar y, sin
              dudas, serán tus preferidas.
            </p>
            </div>
        </div>
      </div>
    </div>
  );
}
