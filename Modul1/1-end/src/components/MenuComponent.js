import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      dishes: [
        {
          id: 0,
          name:'Uthappizza',
          image: 'assets/images/uthappizza.png',
          category: 'mains',
          label:'Hot',
          price:'4.99',
          description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        
        },
        {
          id: 1,
          name:'Zucchipakoda',
          image: 'assets/images/zucchipakoda.png',
          category: 'appetizer',
          label:'',
          price:'1.99',
          description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        
        },
        {
          id: 2,
          name:'Vadonut',
          image: 'assets/images/vadonut.png',
          category: 'appetizer',
          label:'New',
          price:'1.99',
          description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        
        },
        {
          id: 3,
          name:'ElaiCheese Cake',
          image: 'assets/images/elaicheesecake.png',
          category: 'dessert',
          label:'',
          price:'2.99',
          description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        
        }
      ],
    };


  }

  render() {
    
    const menuItems = this.state.dishes.map((item)=>{

      return (
        <Media tag="li" key={item.id}>
          <Media left href="#">
            <Media object src={this.state.dishes[0].image} alt="Generic placeholder image" />
          </Media>
          <Media body className="ml-3">
            <Media heading>
              Numele mancarii
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
      )
    })
    
    return (

      <div className="container">
        <div className="row">
          <Media list className="col-10 mt-5">
            
            {/* <Media tag="li">
              <Media left href="#">
                <Media object src={this.state.dishes[0].image} alt="Generic placeholder image" />
              </Media>
              <Media body className="ml-3">
                <Media heading>
               
                </Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </Media>
            </Media> */}

            { menuItem }

          </Media>
        </div>
      </div>
      
    );
  }
}
 
export default Menu;