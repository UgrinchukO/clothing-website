import React, {PureComponent} from 'react'
import {gql} from "graphql-tag";
import {Query} from "@apollo/client/react/components";
import  "../Currencies/CurrenciesRates_module.css"


export default class CurrenciesRates extends PureComponent {
    render() {
        const GET_CURRENCIES = gql`
     query Query {
        currencies
    }
    `
        return <div>
            <Query query={GET_CURRENCIES}>
                {({loading, data}) => {
                    if (loading) {
                        return <p>Loading....</p>
                    }
                    let {currencies} = data
                    return currencies.map(currency => <div>
                        <button className='value'>
                        {currency}
                        </button>
                    </div>)
                    }
                }
            </Query>
        </div>
    }
}
