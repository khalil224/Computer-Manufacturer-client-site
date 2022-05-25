import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <div>
            <footer class="footer p-10 bg-neutral text-neutral-content mb-0">
                <div>
                    <span class="footer-title">Customer Service</span>
                    <a class="link link-hover">Check Order Status</a>
                    <a class="link link-hover">How To Return Merchandise</a>
                    <a class="link link-hover">Service & Repair</a>
                    <a class="link link-hover">Frequently Asked Questions</a>
                    <a class="link link-hover">Safe Shopping Promise</a>
                    <a class="link link-hover">Recycling</a>
                    <a class="link link-hover">Protection Plans</a>
                </div>
                <div>
                    <span class="footer-title">Shopping</span>
                    <a class="link link-hover">Store Locations</a>
                    <a class="link link-hover">In-Store Pickup</a>
                    <a class="link link-hover">Product Availability</a>
                    <a class="link link-hover">Online Order Restrictions</a>
                    <a class="link link-hover">Return Policy</a>
                    <a class="link link-hover">Credit Cards Accepted</a>
                    <a class="link link-hover">Shipping Options</a>
                </div>
                <div>
                    <span class="footer-title">Resources & Tools</span>
                    <a class="link link-hover">Community</a>
                    <a class="link link-hover">Rebate Center</a>
                    <a class="link link-hover">Sell to Micro Center</a>
                    <a class="link link-hover">Business Services</a>
                    <a class="link link-hover">Site Map</a>
                </div>
                <div>
                    <span class="footer-title">In-Demand & Tech</span>
                    <a class="link link-hover">Refurbished Deals</a>
                    <a class="link link-hover">Closeouts</a>
                    <a class="link link-hover">Open Box</a>
                    <a class="link link-hover">Tech Support</a>
                    <a class="link link-hover">In-Store Clinics</a>
                </div>

            </footer>
            <footer class="footer footer-center p-4 bg-neutral text-neutral-content">
                <div>
                    <p>Copyright © {year}- All right reserved by The Computing Cafe</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;