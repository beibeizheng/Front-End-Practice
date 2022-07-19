<template>
  <div>
    <div class="footer">
      <div class="footer-container">
        <div class="footerList">
          <div class="footerItem">
            <h4>Shopping Guide</h4>
            <ul class="footerItemCon">
              <li>Shopping Process</li>
              <li>Membership</li>
              <li>Life Travel</li>
              <li>FAQ</li>
              <li>Shopping Guide</li>
            </ul>
          </div>
          <div class="footerItem">
            <h4>Delivery</h4>
            <ul class="footerItemCon">
              <li>Pick up</li>
              <li>211 Limited Reach</li>
              <li>Delivery Service Enquiry</li>
              <li>Delivery Charges</li>
              <li>Overseas Delivery</li>
            </ul>
          </div>
          <div class="footerItem">
            <h4>Payments</h4>
            <ul class="footerItemCon">
              <li>Payment On Delivery</li>
              <li>Online Payment</li>
              <li>Installment Payments</li>
              <li>Post Office Transfer</li>
              <li>Company Transfer</li>
            </ul>
          </div>
          <div class="footerItem">
            <h4>After-Sales Service</h4>
            <ul class="footerItemCon">
              <li>After Sales Policy</li>
              <li>Price Protection</li>
              <li>Refund Instructions</li>
              <li>Returns/Exchanges</li>
              <li>Order Cancellation</li>
            </ul>
          </div>
          <div class="footerItem">
            <h4>Featured Services</h4>
            <ul class="footerItemCon">
              <li>Treasure Island</li>
              <li>DIY Installation</li>
              <li>Extended Warranty Service</li>
              <li>Shangpinghui E Card</li>
              <li>Shangpinghui Communications</li>
            </ul>
          </div>
          <div class="footerItem">
            <h4>Help Centre</h4>
            <img src="./images/wx_cz.jpg" />
          </div>
        </div>
        <div class="copyright">
          <ul class="helpLink">
            <li>
              About Us
              <span class="space"></span>
            </li>
            <li>
              Contact Us
              <span class="space"></span>
            </li>
            <li>
              About Us
              <span class="space"></span>
            </li>
            <li>
              Merchant Onboarding
              <span class="space"></span>
            </li>
            <li>
              Marketing Centre
              <span class="space"></span>
            </li>
            <li>
              Friendly Links
              <span class="space"></span>
            </li>
            <li>
              About Us
              <span class="space"></span>
            </li>
            <li>
              Marketing Centre
              <span class="space"></span>
            </li>
            <li>
              Friendly Links
              <span class="space"></span>
            </li>
            <li>About Us</li>
          </ul>
          <p>Address:888 Queens Road,Christchurch,NZ</p>
          <p>NO.19006430</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped lang="less">
.footer {
  background-color: #eaeaea;

  .footer-container {
    width: 1200px;
    margin: 0 auto;
    padding: 0 15px;

    .footerList {
      padding: 20px;
      border-bottom: 1px solid #e4e1e1;
      border-top: 1px solid #e4e1e1;
      overflow: hidden;
      padding-left: 40px;

      .footerItem {
        width: 16.6666667%;
        float: left;

        h4 {
          font-size: 14px;
        }

        .footerItemCon {
          li {
            line-height: 18px;
          }
        }

        &:last-child img {
          width: 121px;
        }
      }
    }

    .copyright {
      padding: 20px;

      .helpLink {
        text-align: center;

        li {
          display: inline;

          .space {
            border-left: 1px solid #666;
            width: 1px;
            height: 13px;
            background: #666;
            margin: 8px 10px;
          }
        }
      }

      p {
        margin: 10px 0;
        text-align: center;
      }
    }
  }
}
</style>