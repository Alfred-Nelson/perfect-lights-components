import React from 'react'
import MarqueeEffect from './MarqueeEffect'
import ExclusiveDeal from './ExclusiveDeal'
import HireConsultant from './HireConsultant'
import ProductCustomize from './ProductCustomize'
import ProductSlider from './ProductSlider'
import CheckoutProduct from './CheckoutProduct'
import ProfessionalUser from './ProfessionalUser'


function BaseOutlet() {
    return (

        <div className=''>
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