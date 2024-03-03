import React from 'react'
import Card from './Card';
import CardLast from './CardLast';

const Main = () => {
    return (
      <div className="mx-36 px-36 mt-10">
        <Card
          num="1"
          desc="WixPro 72-Inch Responsive Website Builder"
          rating="9.8"
          word="Exceptional"
        />
        <Card
          num="2"
          desc="SiteCraft 68-Inch Ultimate Web Design Studio"
          rating="9.5"
          word="Excellent"
        />
        <Card
          num="3"
          desc="WixPro 72-Inch Responsive Website Builder"
          rating="9.3"
          word="Exceptional"
        />
        <CardLast
          num="4"
          desc="CDK Responsive Builder"
          rating="9.1"
          word="Very Good"
        />
      </div>
    );
}

export default Main