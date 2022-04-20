import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Rating from './Rating';
import { CartState } from '../context/CartContext'

const Filters = () => {
    
    const {productState: {byStock, byRating, byFastDelivery, sort}, 
    productDispatch} = CartState();

    console.log(sort, byStock, byRating, byFastDelivery)

  return (
    <div className='filters'>
        <span className="title">Filter Products</span>
        <span>
            <Form.Check
              inline
              label= 'Ascending'
              name= "group1"
              type = "radio"
              id= {`inline-1`}
              onChange={(i) => 
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "lowToHigh",
                })
              }
              checked= {sort === "lowToHigh" ? true: false}
            />
        </span>

        <span>
            <Form.Check
              inline
              label= 'Descending'
              name= "group1"
              type = "radio"
              id= {`inline-2`}
              onChange={(i) => 
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "highToLow",
                })
              }
              checked= {sort === "highToLow" ? true: false}
            />
        </span>

        <span>
            <Form.Check
              inline
              label= "Include out of stock"
              name= "group1"
              type = "checkbox"
              id= {`inline-3`}
              onChange={(i) => 
                productDispatch({
                  type: "FILTER_BY_STOCK",
                })
              }
              checked= {byStock}
            
            />

<span>
            <Form.Check
              inline
              label= 'Fast Delivery'
              name= "group1"
              type = "checkbox"
              id= {`inline-4`}
              onChange={(i) => 
                productDispatch({
                  type: "FILTER_BY_DELIVERY",
                })
              }
              checked= {byFastDelivery}
            />
          
            <span>
                <label style={{paddingRight: 10}}>Rating:</label>
                <Rating 
                rating={byRating} 
                onClick={(i) => 
                  productDispatch({
                    type: "FILTER_BY_RATING",
                    payload: i + 1,
                  })
                }
                style={{cursor: "pointer"}} 
                />
            </span>

            <Button 
            variant='light'
            onClick={()=> 
              productDispatch({
                type: "CLEAR_FILTERS",
              })
            }
            >Clear Filters</Button>
        </span>
        </span>
    </div>
  )
}

export default Filters;