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
                {({loading, data}) => {
                    if (loading) {
                        return <p>Loading....</p>
                    }

                    let {category, products, prices} = data;

                    return category.products.map(product => product.prices.map((price) =>
                        <div className={s.value}>
                            {price.amount}
                        </div>
                        )
                    )
                    // return category.products.map(product =>
                    //     <div className={s.value}>
                    //         <img src={product.gallery}/>
                    //         <p>{product.name}</p>
                    //         return product.prices.map((price) =>
                    //         <div>{price.currency}</div>)
                    //     </div>)

                }
                }
            </Query>
        </div>
    }
}