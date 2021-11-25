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
      id
      gallery
      description
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

                    let {category, products} = data;
                    return category.products.map(product =>
                        <div className={s.value}>
                            <img src={product.gallery} />
                            <div>{product.description}</div>
                        </div>)
                }
                }
            </Query>
        </div>
    }
}
