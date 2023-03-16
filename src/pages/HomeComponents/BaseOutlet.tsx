import React from 'react'
import ExclusiveDeal from './ExclusiveDeal'
import HireConsultant from './HireConsultant'
import ProductCustomize from './ProductCustomize'
import ProductSlider from './ProductSlider'
import CheckoutProduct from './CheckoutProduct'
import ProfessionalUser from './ProfessionalUser'
import MarqueeEffect from './MarqueeEffect'


function BaseOutlet() {
    return (

        <div className=' bg-black text-white'>

            {/* Exclusive Deals */}
            <ExclusiveDeal />

            {/* Product Customization */}
            <ProductCustomize />

            <HireConsultant />
            <ProfessionalUser />
            <MarqueeEffect />
            <CheckoutProduct />
            <ProductSlider />
        </div>
    )
}

export default BaseOutlet