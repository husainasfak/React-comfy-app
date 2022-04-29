import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      minPrice,
      maxPrice,
      price,
      shipping,
    },
    updateFilter,
    clearFilter,
    allProducts,
  } = useFilterContext();

  const categories = getUniqueValues(allProducts, "category");
  const companies = getUniqueValues(allProducts, "company");
  const colors = getUniqueValues(allProducts, "colors");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Search */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              autoComplete="off"
              value={text}
              onChange={updateFilter}
            />
          </div>

          {/* category */}

          <div className="form-control">
            <h5>Category</h5>
            <div>
              {categories.map((cat, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilter}
                    type="button"
                    name="category"
                    className={`${
                      category === cat.toLowerCase() ? "active" : null
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* companies */}

          <div className="form-control">
            <h5>Company</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilter}
              className="company"
            >
              {companies.map((comp, index) => {
                return (
                  <option key={index} value={comp}>
                    {comp}
                  </option>
                );
              })}
            </select>
          </div>

          {/* colors */}

          <div className="form-control">
            <h5>Colors</h5>
            <div className="colors">
              
              {colors.map((col, index) => {
                if(col === 'all'){
                  return <button name="color" data-color="all" onClick={updateFilter} className={`${color === 'all'?'all-btn active':'all-btn'}`}>all</button>
                }
                return (

                  <button
                    key={index}
                    name="color"
                    style={{ background: col }}
                    className={`${
                      color === col ? "color-btn active" : "color-btn"
                    }`}
                    data-color={col}
                    onClick={updateFilter}
                  >
                    {color === col ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>

          {/* price */}

              <div className="form-control">
                <h5>Price</h5>
                <div className="price">
                  <p>{formatPrice(price)}</p>
                  <input type="range" name='price' onChange={updateFilter}
                  min={minPrice} max={maxPrice} value={price} />
                </div>
              </div>
            {/* shipping */}
              <div className="form-control shipping">
                <label htmlFor="shipping">free shipping</label>
                <input type='checkbox' name='shipping' id='shipping' onChange={updateFilter} checked={shipping}/>
              </div>
        </form>
        <button type="button" className="clear-btn" onClick={clearFilter}>Clear Filters</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;