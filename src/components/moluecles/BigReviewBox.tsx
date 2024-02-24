import React from 'react'
import { ReviewBox } from '.'
import { Person1, Person2, Review1, Review2, Review3 } from '../atom/assets'

export default function BigReviewBox() {
    return (
        <div className="big-box  my-14 flex flex-col gap-10">
            <ReviewBox
                carImage={Review1}
                personImage={Person1}
                name= 'Our innovation'
                time= 'Our innovation'
                firstParagraph= 'Our innovation goes beyond boundaries - distinguished customer service - a distinguished fleet of cars - competitive prices'
                secondParagraph= 'Our innovation goes beyond boundaries - distinguished customer service - a distinguished fleet of'
            />  
            <ReviewBox
                carImage={Review2}
                personImage={Person2}
                name= 'Our innovation'
                time= 'Our innovation'
                firstParagraph= 'Our innovation goes beyond boundaries - distinguished customer service - a distinguished fleet of cars - competitive prices'
                secondParagraph= 'Our innovation goes beyond boundaries - distinguished customer service - a distinguished fleet of'
            />
            <ReviewBox
                carImage={Review3}
                personImage={Person1}
                name= 'Our innovation'
                time= 'Our innovation'
                firstParagraph= 'Our innovation goes beyond boundaries - distinguished customer service - a distinguished fleet of cars - competitive prices'
                secondParagraph= 'Our innovation goes beyond boundaries - distinguished customer service - a distinguished fleet of'
            />

        </div>
    ) 
}
