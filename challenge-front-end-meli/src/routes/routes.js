import {lazy} from 'react'
const ItemList = lazy(()=> import ('../components/ItemList/itemListView'));
const ItemDetails = lazy(()=> import ('../components/ItemDetails/itemDetailsView'));

const routes = [
  {
    path: 'items',
    name: 'items',
    layout: '/items',
    exact: true,
    element: <ItemList/>,
  },
  {
    path: '/items/:id',
    name: '/items/:id',
    exact: false,
    layout: '/items/:id',
    element: <ItemDetails/>,
  },
];

export default routes;
