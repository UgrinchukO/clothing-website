import React, {PureComponent} from 'react'
import s from "./Men.module.css"
import {gql} from "graphql-tag";
import {Query} from "@apollo/client/react/components";

export default class Men extends PureComponent {
    render() {
        const GET_PRODUCTS = gql`
     query Query {
  categories {
    products {
      prices {
        currency
        amount
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

                        let {categories, products} = data;
                        return categories.products.map(product =>
                            <div className={s.value}>
                                <p>({product.prices.amount})</p>
                            </div>)

                    }
                    }
                </Query>
            </div>
        )
    }
}