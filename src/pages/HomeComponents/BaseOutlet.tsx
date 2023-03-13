import React from 'react'
import ExclusiveDeal from './ExclusiveDeal'
import ProductCustmize from './ProductCustmize'


function BaseOutlet() {
    return (

        <div>

            {/* Exclusive Deals */}
            <ExclusiveDeal />

            {/* Product Customization */}
            <ProductCustmize />

        </div>
    )
}

export default BaseOutlet