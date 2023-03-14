import React from 'react'
import ExclusiveDeal from './ExclusiveDeal'
import ProductCustomize from './ProductCustomize'


function BaseOutlet() {
    return (

        <div className=''>

            {/* Exclusive Deals */}
            <ExclusiveDeal />

            {/* Product Customization */}
            <ProductCustomize />

        </div>
    )
}

export default BaseOutlet