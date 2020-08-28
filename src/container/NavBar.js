import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './NavBar.css'
import { SellItem, Watchlist, Summary , SearchBar, Currency, 
         FilterBar, ShoppingCart, UserController} from '../component'; 
import {connect} from 'react-redux'

function NavBar(props){
    console.log('nav bar prop shoppingCartItems length', props.shoppingCartItems.length)
    console.log('nav bar prop current user', props.currentUser)
  
  return (
    // <div className=" navbar fixed-top navbar-dark bg-primary">
    <div className="mainNavBar">
        {/* <div className="navDiv">  */}
            
            <Link to="/items"><div className="navBarSubDiv navBarSubDivStyle " >Home</div></Link>

            {props.currentUser!==null && props.currentUser.username==="Nadi" ?
                <Link to="/items/sell">
                    <div className="navBarSubDiv navBarSubDivStyle">Sell</div>
                </Link>
            :
                null
            }

            <div className=" navBarSubDiv navBarSubDivStyle"> 
                <FilterBar handleChange={props.handleChange} 
                        searchTerm={props.searchTerm}
                        sortChoice={props.sortChoice} /> 
            </div>

            {props.currentUser!==null && props.currentUser.username==="Nadi" ?
                null:
                <div>
                    <Link to="/watchlist">
                        <div className="navBarSubDiv navBarSubDivStyle">
                            { props.currentUser && props.watchlistItems.length > 0 ? 
                                <span className="navBarSpan">
                                    {props.watchlistItems
                                    .filter(xxx => xxx.watchlist_id===props.currentUser.id)
                                    .length}
                                </span> 
                                : null
                            }
                            watchlist 
                        </div>
                    </Link>
                </div>
            }
            {props.currentUser!==null && props.currentUser.username==="Nadi" ?
                null:
                <div>
                    <Link to="/shoppingcart">
                        <div className="navBarSubDiv navBarSubDivStyle">
                        { props.currentUser && props.shoppingCartItems.length > 0 ? 
                            <span className="navBarSpan">
                                {props.shoppingCartItems
                                .filter(xxx => xxx.shopping_cart_id === props.currentUser.id)
                                .length}
                            </span> 
                            : null 
                        }
                        Shop 🛒</div>
                    </Link>
                </div>
            }

            <Link to="/items/summary">
                <div className="navBarSubDiv navBarSubDivStyle">
                    { props.currentUser && (props.offers.filter(xxx => xxx.item.user_id === props.currentUser.id)
                            .length) > 0 ? 
                            <div>
                                <span className="">
                                    {props.offers
                                    .filter(xxx => xxx.item.user_id === props.currentUser.id)
                                    .length} </span> 
                                Offers 
                            </div>
                        :<span> history </span> 
                    }
                </div> 
            </Link>

            <Link to="/profile">
                <div className="navBarSubDiv navBarSubDivStyle">Profile</div>
            </Link>
            <div className="navBarSubDiv navBarSubDivStyle"> 
                <UserController  logout={props.logout} currentUser={props.currentUser} /> </div>

        {/* </div> */}
    </div>
  )
}

function msp(state){
    return { 
        shoppingCartItems: state.shoppingCartItems,
        watchlistItems: state.watchlistItems,
        offers: state.offers  
    }
}

export default connect(msp)(NavBar)
