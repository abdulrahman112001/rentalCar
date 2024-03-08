import React from 'react'
import { JourneyBox } from '../'
import { Diamond, Garage, Vector } from '../../atom/assets'

export default function BigJourneyBox() {
    return (
        <div className="big-box flex flex-col md:flex-row justify-between items-center my-14 gap-16">
            <JourneyBox
                image={Vector}
                description="Easy Booking"
                text="Book your car through our website without wasting your time"
            />
            <JourneyBox
                image={Garage}
                description="Unlimited Luxury Fleet"
                text="Choose between a wide variety of cars ranging from luxury cars to luxury cars"
            />
            <JourneyBox
                image={Diamond}
                description="Quality of service"
                text="We are committed to providing excellent customer service and an unparalleled user experience"
            />
        </div>
    )
}
