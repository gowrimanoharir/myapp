import React, {useRef, useState} from 'react'
import {ServicesContainer, ServicesH1, ServicesRow, ServicesSlideRow, ServicesSlide, ServicesCount, ServicesImg, ServicesText, ServicesLeftArrow, ServicesRightArrow, ServicesMobileListView, ServicesMobileText} from './ServicesElements'
const ServicesSection = ({slides}) => {

    const listRef = useRef(null);
    const [index, setIndex] = useState(-1);

    const scrollLeft = () => {
        if (listRef.current) {
            listRef.current.scrollBy({
                top: 0,
                left: -500,
                behavior: "smooth",
            })
        }
    };

    const scrollRight = () => {
        if (listRef.current) {
            listRef.current.scrollBy({
                top: 0,
                left: 500,
                behavior: "smooth",
            })
        }
    }

    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>what we offer</ServicesH1>
                <ServicesRow>
                    <ServicesLeftArrow onClick={scrollLeft}/>
                    <ServicesSlideRow ref={listRef}>
                        {Array.isArray(slides) && slides.map((slide, i) => {
                            return(
                                <ServicesCount key={i} onMouseOver={() => setIndex(i)} onMouseOut={(e) => setIndex(-1)}>
                                    <ServicesSlide key ={i}>
                                        <ServicesImg src={slide.image} alt={slide.title} style={{display: (index===i) ? "none": "block"}}/>
                                        <ServicesText dangerouslySetInnerHTML={{__html: slide.title}} style={{display: (index===i) ? "block" : "none", fontWeight: "700", fontSize: "30px", color: "#fff", textAlign: "center"}} />
                                    </ServicesSlide>
                                </ServicesCount>
                            );
                        })}
                    </ServicesSlideRow>
                    <ServicesRightArrow onClick={scrollRight}/>
                </ServicesRow>
                <ServicesMobileListView>
                    {Array.isArray(slides) && slides.map((slide, i) => {
                        return(
                            <ServicesMobileText key={i} dangerouslySetInnerHTML={{__html: slide.title}} />
                        );
                    })}
                </ServicesMobileListView>
            </ServicesContainer>
        </>
    )
}

export default ServicesSection
