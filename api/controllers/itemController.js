const api = require('../api');
const { ItemsResponse } = require('../models/ItemResponse');
const { ItemDetailsResponse } = require('../models/ItemDetailsResponse');

const itemController = {
  getItems: function ({ query }, res) {
    return api
      .get('/sites/MLA/search', { params: { q: query, limit: 4 } })
      .then(({ data }) => {
          //get categories
          const filterCategories = data?.available_filters?.find(filter => filter.id === "category");
          if(filterCategories && filterCategories?.values?.length > 0){
            const categoryResults = filterCategories?.values.map((a) => a.results)
            const highestRestults = Math.max(...categoryResults);
            const categoryWithHighestResults = filterCategories?.values.find(category => category.results === highestRestults);
            if(categoryWithHighestResults){
              api.get(`/categories/${categoryWithHighestResults.id}`).then(( {data: itemCategory }) => {
                let categories = itemCategory.path_from_root;
                let categoriesNames = categories.map(category => category.name);
                const response = {...new ItemsResponse(categoriesNames, data.results)};
                res.status(200).send(response);
              }).catch(error => res.status(404).send({ error }));
            }
          }         
      })
      .catch(error => res.status(404).send({ error }));
  },

  getItemDetails: function ({ params }, res) {
    if(params.id){
      //get item details
      return api.get(`/items/${params.id}`)
      .then(( {data: itemDetails }) => {
        //get item categories
        api.get(`/categories/${itemDetails.category_id}`)
        .then(( {data: itemCategory }) => {
          let categories = itemCategory.path_from_root;
          let categoriesNames = categories.map(category => category.name);
          itemDetails.categories = categoriesNames;
          //get item description
          api.get(`/items/${params.id}/description`)  
          .then(( {data: itemDescription }) => {
            //this product have description
            itemDetails.description = itemDescription?.plain_text;
            const response = {...new ItemDetailsResponse(itemDetails)};
            res.status(200).send(response);
          }).catch(error => {
             //this product dont have description
              itemDetails.description = "";
              const response = {...new ItemDetailsResponse(itemDetails)};
              res.status(200).send(response);
          });
        }).catch(error => res.status(404).send({ error }));
      })
      .catch(error => res.status(404).send({ error }));
    }else{
      return res.status(404).send({ error: "You need to send an item id" })
    }
  },
};

module.exports = itemController;