import React, { Component } from 'react';


import '../App.css';

class QuestionTwo extends Component {

  render() {
    return (
      <div className='container'> 
        
        <h3 Style={'text-align:center;'}> 
            Explain how to purchase socks on Amazon.cossm to someone who has never used the website before.
        </h3>

        <div Style={'text-align: left;'}>
            <h5 Style={'text-align:left;'}>Title: How to purchase socks through Amazon.com</h5>
            <span>
                <strong>Description: </strong>
                With an established Internet access, this is how a user can use an Internet browser to purchase socks on Amazon.com.
            </span>
            <ol>
                <li>
                    Once Internet connection has been established, open an Internet browser, such as Google Chrome, Mozilla-Firefox, Safari, or Internet Explorer.
                
                </li>
                <li>
                    Go the the address bar and enter the following url, https://www.amazon.com, into the input field.
                    
                </li>
                <li>
                    At the top of the Amazon homepage you be presented with  a search bar with a search icon.                      
                </li>
                <li>
                    Enter the value “socks” into the search field, and click the search icon or press the enter key. The website will then redirect to a page with results based on your search term “socks.”
                    
                </li>
                <li>
                    Each result item will be displayed with a graphic presentation of the product, price, and review stars (the more stars filled in yellow, the better the average customer reviews are).
                </li>
                <li>
                    As you scroll through the results, select an item that you are interested in purchasing. For this example, we will use this specific sock result, http://a.co/d/1mlFefj. Click on this link to inspect the sock item.
                </li>
                <li>
                    To the left of the item show page you will notice an image gallery for the item, and may click on different images to view them larger. On the right you may notice descriptions referring to material, design, and purchase information.
                </li>
                <li>
                    There will be a value box named “Qty”  meaning quantity. You may click on the box and select the number of orders of this product you desire. 
                </li>
                <li>
                    Next to the description you will find a shopping-cart icon    with a link, “Add to Cart.” Above the icon you will notice the following information:
                    <ul>
                        <li>
                            item price
                        </li>
                        <li>
                            shipping details
                        </li>
                        <li>
                            return policy
                        </li>
                        <li>
                            delivery estimation
                        </li>
                        <li>
                           seller name
                        </li>
                        <li>
                            availability status: available or out of stock.     
                        </li>
                    </ul>
                </li> 
                <li>
                    If them item is available, click on the “Add to Cart”  link. Your shopping cart is a collection of items that you want to add to your next order. When you click “Add to Cart”, the item is added to your collection of items in your potential order, and the page redirect to a new page verifying your cart addition. You will see a cart subtotal, and a link to view your cart or proceed to checkout. Click on “Proceed to checkout.”
                </li>
                <li>
                    The new page will prompt you to sign-in. But as you do not have an account, you must create an Amazon account. Click on the “Create your Amazon Account” link. You will register with input into the following fields.
                    <ul>
                        <li>
                           name
                        </li>
                        <li>
                           email
                        </li>
                        <li>
                           password (at least six letters)
                        </li>
                        <li>
                           re-enter your password (for password confirmation)
                        </li>
                    </ul>
                </li>
                <li>
                    Next you will be redirected to a page requesting your shipping & address information with the follow input fields.
                    <ul>
                        <li>
                            Full Name
                        </li>
                        <li>
                            Address Lines 1 & 2
                        </li>
                        <li>
                            City
                        </li>
                        <li>
                            State/Province Region
                        </li>
                        <li>
                            Zip Code
                        </li>
                        <li>Phone Number</li>
                        <li>Optional delivery instructions</li>
                        <li>Optional Security Code (for location access)</li>
                        <li>Days of Delivery Availability</li>
                        <li>Confirmation if shipping address is the same as billing address</li>
                       
                    </ul>
                    Click on the “Continue” link when you are finished inputting into these fields. You will be redirected to a new page with delivery options. 
                </li>
                <li>
                    Select a delivery method with your preferred price and delivery date estimation, click “Continue”, and you will be redirected to another page with fields requesting your payment information.
                    <ul>
                        <li>
                            Credit or Debit Card
                            <ul>
                                <li>Name on Card</li>
                                <li>Card Number</li>
                                <li>Expiration Date</li>
                            </ul>
                        </li>
                        <li>Gift Cards & Promotional Codes</li>
                        <li>Amazon Store Card application</li>
                        <li>Bank Account Addition</li>
                    </ul>
                    Click “Continue” after filling out the payment information fields, and then you will be redirected to a new page requesting billing information.
                </li>
                <li>
                    Click on “Use this Address” to make your shipping & billing information identical, or enter a different billing address with the provided fields. Click “Use this Address” to continue, and be redirected to a Review-Order page.
                </li>
                <li>
                    Your order review will present your shipping information, payment method, and optional 	promotional codes.
                </li>
                <li>
                To the right of your order reviewing, you will find a “Place your order” link. If you want to finalize this order of socks, click on “Place your order.” You will then be redirected to a new page with a confirmation number, and receive a confirmation email to your registered account 	email address. 
                </li>
            </ol>  
        </div>       
      </div>
    );
  }
}

export default QuestionTwo;
