import React from 'react';
import CardGroup from './CardGroup'
import Card from './Card'


/*
 * CardGroup
 * This component takes Card components as children and renders them.
 * Example usage:
 *
 *      <CardGroup>
 *          <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
 *      </CardGroup>
 *
 * The above would render a card group with a single child in it.
 *
 */

const App = () => (
    <CardGroup>
        <Card description="Trial" icon="fa-thumbs-o-up" price="Free" />
        <Card description="Basic tier" hint="(most popular)" icon="fa-trophy" price="$10.00" />
        <Card description="Advanced tier" hint="(only for enterprise-level professionals)" icon="fa-bolt" price="$6,000" />
    </CardGroup>
    )
    // <div className="cardGroup">
    //     <div className="card cardGroup__card">
    //         <div className="card__description cardGroup__cardDescription">
    //             <div className="icon fa fa-thumbs-o-up card__descriptionIcon" />
    //             <div className="card__descriptionText">
    //                 Trial
    //             </div>
    //         </div>
    //         <div className="card__price">Free!</div>
    //     </div>
    //     <div className="card cardGroup__card">
    //         <div className="card__description cardGroup__cardDescription">
    //             <div className="icon fa fa-trophy card__descriptionIcon" />
    //             <div className="card__descriptionText">
    //                 Basic tier
    //                 <br/>
    //                 (most popular)
    //             </div>
    //         </div>
    //         <div className="card__price">$10.00</div>
    //     </div>
    //     <div className="card cardGroup__card">
    //         <div className="card__description cardGroup__cardDescription">
    //             <div className="icon fa fa-bolt card__descriptionIcon" />
    //             <div className="card__descriptionText">
    //                 Advanced tier
    //                 <br/>
    //                 (only for enterprise-level professionals)
    //             </div>
    //         </div>
    //         <div className="card__price">$6,000.00</div>
    //     </div>
    // </div>
// );

export default App;
