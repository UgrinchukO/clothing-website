import React, {PureComponent} from 'react'
import s from "./Men.module.css"
import {gql} from "graphql-tag";
import {Query} from "@apollo/client/react/components";

export default class Men extends PureComponent {
    render() {
        const GET_PRODUCTS = gql`
     query Category {
  category {
    products {
    name
      prices {
      amount
        currency
      }
    }
  }
}
`
        return (
            <div className={s.categoryClothing}>
                <Query query={GET_PRODUCTS}>
                    {({loading, data}) => {
                        if (loading) {
                            return <p>Loading....</p>
                        }

                        let {category, products, prices} = data;

                        return category.products.map((product) => {
                                return product.prices.map((price) =>
                                <div>
                                    {price.currency}
                                    {price.amount}
                                </div>)
                            }
                        )
                    }
                    }
                </Query>
            </div>
        )
    }
}