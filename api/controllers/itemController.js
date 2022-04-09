const api = require('../api');
const { ItemsResponse } = require('../models/Response');

const itemController = {
  getItems: function ({ query }, res) {
    return api
      .get('/sites/MLA/search', { params: { q: query, limit: 4 } })
      .then(({ data }) => {
          //get categories
          const filterCategories = data?.filters?.find(filter => filter.id === "category");
          let categories = [];
          let categoriesNames = [];
          if(filterCategories && filterCategories?.values?.length > 0){
            categories = filterCategories.values[0].path_from_root;
            if(categories){
                categories.forEach(category => {
                    categoriesNames.push(category.name);
                });
            }
          }
          const response = Object.assign(new ItemsResponse([], data.results), {});
          console.log(response)
          res.status(200).send(response);
      })
      .catch(error => res.status(404).send({ error }));
  },
};

module.exports = itemController;