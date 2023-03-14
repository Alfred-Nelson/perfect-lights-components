import React from 'react'
import ExclusiveDeal from './ExclusiveDeal'
import HireConsultant from './HireConsultant'
import ProductCustomize from './ProductCustomize'


function BaseOutlet() {
    return (

        <div className=' bg-black text-white'>

            {/* Exclusive Deals */}
            <ExclusiveDeal />

            {/* Product Customization */}
            <ProductCustomize />

            <HireConsultant />

        </div>
    )
}

export default BaseOutlet