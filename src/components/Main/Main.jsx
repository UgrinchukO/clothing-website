import s from "../Main/Main.module.css"
import React, {PureComponent} from 'react'
import {gql} from "graphql-tag";
import {Query} from "@apollo/client/react/components";


export default class Main extends PureComponent {
    render() {
        const GET_PRODUCTS = gql`
     query Query {
  category {
    products {
      gallery
      name
      id
      prices {
        currency
        amount
      }
    }
  }
}
    `
        return <div className={s.wrapProducts}>
            <Query query={GET_PRODUCTS}>
                {({loading, data, valueId}) => {
                    if (loading) {
                        return <p>Loading....</p>
                    }

                    let {category, products, prices} = data;

                    return category.products.map(product =>
                        <div className={s.value}>
                            <img src={product.gallery}/>
                            <p>{product.name}</p>
                            <div className={s.priceProduct}>
                                <p>{product.prices.find(price => price.currency === 'USD').currency}</p>
                                <p>{product.prices.find(price => price.currency === 'USD').amount}</p>
                            </div>
                            </div>
                    )
                }
                }
            </Query>
        </div>
    }
}