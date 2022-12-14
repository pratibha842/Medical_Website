import React from 'react';
import './category.css'

const Category = () => {
  return (
    <div>
        <Categories
        title = "Related Category"
        item1 = "Paracetamol Tablets"
        item2 = "Paracetamol Syrup"
        item3 = "Paracetamol Powder"
        item4 = "Aceclofenac"
        item5 = "Magaladrate Simethicone Oral Suspension"
        item6 = "Mefenamic Paracetamol Syrup"
        />
        <Brands
        title = "Related Brands"
        item1 = "Cipmol Paracetamol"
        item2 = "Pandal Paracetamol Tablets"
        item3 = "Combiflam"
        item4 = "Crocin Tablets"
        item5 = "Calpol Paracetamol Tablets"
        item6 = "Sumo Tablet"
        />
        <Business
        title = "Business Type"
        item1 = "Wholesaler"
        item2 = "Manufacturer"
        item3 = "Retailer"
        item4 = "Exporter"
        />
        <Strength
        title = "Strength"
        item1 = "500mg"
        item2 = "650mg"
        />
        <Manufacturer
        title = "Manufacturer"
        item1 = "Intas Pharmaceutical Ltd"
        item2 = "Alkem Laboratories Ltd"
        />
        <Prescription
        title = "Prescription/Non prescription"
        item1 = "Intas Pharmaceutical Ltd"
        item2 = "Alkem Laboratories Ltd"
        />
    </div>
  )
}

function Categories(props){
    return(
        <div className="product_container">
            <div className="right_product">
                <div className="card">
                    <div className="card_container">
                        <div className="card_title">
                            <h3>{props.title}</h3> 
                        </div>
                        <div className="items">
                            <p>{props.item1}</p>
                            <p>{props.item2}</p>
                            <p>{props.item3}</p>
                            <p>{props.item4}</p>
                            <p>{props.item5}</p>
                            <p>{props.item6}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Brands(props){
    return(
        <div className="product_container">
            <div className="right_product">
                <div className="card">
                    <div className="card_container">
                        <div className="card_title">
                            <h3>{props.title}</h3> 
                        </div>
                        <div className="items">
                            <p>{props.item1}</p>
                            <p>{props.item2}</p>
                            <p>{props.item3}</p>
                            <p>{props.item4}</p>
                            <p>{props.item5}</p>
                            <p>{props.item6}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Business(props){
    return(
        <div className="product_container">
            <div className="right_product">
                <div className="card">
                    <div className="card_container">
                        <div className="card_title">
                            <h3>{props.title}</h3> 
                        </div>
                        <div className="items">
                            <p>{props.item1}</p>
                            <p>{props.item2}</p>
                            <p>{props.item3}</p>
                            <p>{props.item4}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Strength(props){
    return(
        <div className="product_container">
            <div className="right_product">
                <div className="card">
                    <div className="card_container">
                        <div className="card_title">
                            <h3>{props.title}</h3> 
                        </div>
                        <div className="items">
                            <p>{props.item1}</p>
                            <p>{props.item2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Manufacturer(props){
    return(
        <div className="product_container">
            <div className="right_product">
                <div className="card">
                    <div className="card_container">
                        <div className="card_title">
                            <h3>{props.title}</h3> 
                        </div>
                        <div className="items">
                            <p>{props.item1}</p>
                            <p>{props.item2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Prescription(props){
    return(
        <div className="product_container">
            <div className="right_product">
                <div className="card">
                    <div className="card_prescription_container">
                        <div className="card_prescription_title">
                            <h3>{props.title}</h3> 
                        </div>
                        <div className="prescription_items">
                            <p>{props.item1}</p>
                            <p>{props.item2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Category