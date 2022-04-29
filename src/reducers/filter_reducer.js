import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  
  if(action.type === LOAD_PRODUCTS){
    let maxPrice = action.payload.map(product=>product.price);
    maxPrice = Math.max(...maxPrice)
    return {...state,allProducts:[...action.payload],filteredProducts:[...action.payload],filters:{...state.filters,maxPrice:maxPrice,price:maxPrice}}
  }

  if(action.type === SET_GRIDVIEW){
    return {...state,gridView:true,listView:false}
  }

  if(action.type === SET_LISTVIEW){
    return {...state,listView:true,gridView:false}
  }
  
  if(action.type === UPDATE_SORT){
    return  {...state,sort:action.payload}
  }

  if(action.type === SORT_PRODUCTS){
    const {sort,filteredProducts} = state;
    let sortedProducts = [...filteredProducts];
    if(sort === 'price-lowest'){
      sortedProducts = sortedProducts.sort((current,next)=>current.price - next.price)
    }
    if(sort === 'price-highest'){
      sortedProducts = sortedProducts.sort((current,next)=>next.price - current.price)
    }
    if(sort === 'name-a'){
      sortedProducts = sortedProducts.sort((current,next)=>{
        return current.name.localeCompare(next.name)
      })
    }
    if(sort === 'name-z'){
      sortedProducts = sortedProducts.sort((current,next)=>{
        return next.name.localeCompare(current.name)
      })
    }
    
    return {...state,filteredProducts:sortedProducts}
  }

  
  if(action.type === UPDATE_FILTERS){
    const {name,value} = action.payload
    return {...state,filters:{...state.filters,[name]:value}}
  }

  if(action.type === FILTER_PRODUCTS){
    const {allProducts} = state;
    const {text,category,company,color,price,shipping} = state.filters;
    let tempProduct = [...allProducts];

    if(text){
      tempProduct = tempProduct.filter(product =>{
        return product.name.toLowerCase().startsWith(text)
      })
    }

    if(category !=='all'){
      tempProduct = tempProduct.filter(product=> product.category === category)
    }

    if(company !=='all'){
      tempProduct = tempProduct.filter(product=> product.company === company)
    }

    if(color !=='all'){
      tempProduct = tempProduct.filter(product=>{
        return product.colors.find((col)=>col === color)
      })
    }

    if(shipping){
      tempProduct = tempProduct.filter(product=>product.shipping === true)
    }

    tempProduct = tempProduct.filter(product=>product.price<= price)
    return {...state,filteredProducts:tempProduct}
  }

  if(action.type === CLEAR_FILTERS){
    return {
      ...state,
      filters:{
        ...state.filters,
        text:'',
        company:'all',
        category:'all',
        color:'all',
        price:state.filters.maxPrice,
        shipping:false
      }
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
