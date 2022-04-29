import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const {filteredProducts,gridView} = useFilterContext()
  if(filteredProducts.length < 1){
    <h5 style={{textTransform:'none'}}>no products matched your search</h5>
  }
  if(gridView === false){
    return <ListView products={filteredProducts}/>
  }
  return <GridView products={filteredProducts}/>
 
}

export default ProductList
