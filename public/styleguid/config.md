
`Navbar menu`
--------------

    @example 
    nav.navbar(role='navigation', aria-label='main navigation')
      .container
        .navbar-brand
          a.navbar-item.navbar-brand-logo(href='/')
            img(src='../images/logo/100x86.png')
          a.navbar-burger(role='button', aria-label='menu', aria-expanded='false')
            span(aria-hidden='true')
            span(aria-hidden='true')
            span(aria-hidden='true')
        .navbar-menu
          .navbar-end
            a.navbar-item(href='./security.html') What We Do
            a.navbar-item(href='./products.html') Our Works
            a.navbar-item(href='./case-studies.html') Case Studies
            button.navbar-item.button.btn-o.btn-o-white.is-uppercase Contact us

------
 
`Titles`
--------------
### Large title

    @example
    h2.title.title-lg.is-spaced
      | Security, development 
      br.is-hidden-desktop
      |  and blockchain solutions.
    h2.title.title-middle.is-spaced.info-section-title-lg Have a look on what we are working on

### subtitle
    @example
    .subtitle
      | Our main goal is drive your capacities to raise as much founds as possible and launch your product through the new crypto business economy.
    .subtitle.subtitle-large
          | Our main goal is drive your capacities to raise as much founds as possible and launch your product through the new crypto business economy.

    .subtitle.subtitle-left-border
      | We offer a 360° environment for your crypto business launch, leaving you focus on develop your product.

`Content`
--------------
    @example
    .columns.achievements.achievements-bottom-offset
      .column.achievements-item
        .achievements-item-number 36
        .title.achievements-item-title MILLION RAISED
    .columns.info-section-content.content-with-image
      a.column.content-item(href='./title-of-my-case-study.html')
        img.content-item-image(src='./images/blockchain-image.jpg')
        .subtitle.subtitle-left-border.content-item-subtitle Lorem ipsum dolor sit amet, consectetur adipisicing.
        span.title.content-item-title Lorem ipsum dolor sit amet.
      a.column.content-item(href='./title-of-my-case-study.html')
        img.content-item-image(src='./images/token-sale-image.jpg')
        .subtitle.subtitle-left-border.content-item-subtitle Lorem ipsum dolor sit amet, consectetur adipisicing.
        span.title.content-item-title Lorem ipsum dolor sit amet.
      a.column.content-item(href='./title-of-my-case-study.html')
        img.content-item-image(src='./images/academy-image.jpg')
        .subtitle.subtitle-left-border.content-item-subtitle Lorem ipsum dolor sit amet, consectetur adipisicing.
        span.title.content-item-title Lorem ipsum dolor sit amet.
    
    .column.products-list-item.content-white
      .products-list-item-content
        img.products-list-image(src='./images/products/product4.jpg')
        .subtitle.products-list-subtitle Taxi, People flying, Drones
        .title.title-lg.products-list-title VIMANA
        button.button.btn-o.btn-o-white.is-uppercase.products-list-button Website
      .subtitle.subtitle-large.products-list-item-description
        | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto atque aut commodi dolor dolore dolores et eveniet, ex, excepturi explicabo facilis inventore ipsam ipsum laborum modi neque nesciunt nihil nobis nostrum officia quam recusandae reiciendis sed sequi, vel voluptatum. Enim et excepturi ipsam mollitia natus, nobis nulla optio quidem!



`Buttons`
--------------

    @example
    .scroll-down
      a.scroll-down-link(href='#info-section1')
        span.subtitle.subtitle-link.scroll-down-text SCROLL DOWN
        button.button.icon.scroll-down-button
          i.scroll-down-button-icon
    button.button.btn-secondary.products-list-button DISCOVER MORE
    button.button.btn-o.btn-o-white.is-uppercase Website
          
`Footer`
--------------

    @example
    .footer
      .container
        .columns
          .column
            .footer-logo
              img.footer-logo-image(src='../images/logo/100x86.png')
              .footer-logo-text IN BLOCKCHAIN WE TRUST
          .column.footer-right-column
            .footer-slogan
              | “This might be the purest form of democracy the world
              | has ever know.”
            .columns
              .column.footer-address-column
                .footer-title Office
                .footer-address
                  | —— Nord Europe 
                  br
                  |  Sepapaja tn 6 
                  br
                  |  15551 Tallinn 
                  br
                  |  Estonia
                .footer-address
                  | —— South Europe 
                  br
                  |  Via Friuli 72 
                  br
                  |  20135 Milano 
                  br
                  |  Italy
              .column
                .footer-title Send us a message
                a.link.link-underline(href='mailto:hello@vulpem.com') hello@vulpem.com
              .column.footer-social-column
                .footer-title Social
                .footer-social-container
                  a.link.link-underline.footer-social-link Facebook
                  a.link.link-underline.footer-social-link Instagram
        .columns.footer-bottom
          .column
            .copyright © VULPEM VENTURES OÜ (LLC)
            .copyright-small All right reserved.
          .column.footer-right-column
            .columns
              .column.footer-address-column
                a.link.link-underline PRIVACY POLICY
              .column
                a.link.link-underline WANT TO WORK WITH US?
              .column



# Styleguide options   

### Head
    link(rel='stylesheet' href='https://cdn.rawgit.com/styledown/styledown/v1.0.2/data/styledown.css')
    link(rel="stylesheet" href="../css/style.css")
    link(rel="stylesheet" href="styles.css") 
    script(src='https://cdn.rawgit.com/styledown/styledown/v1.0.2/data/styledown.js')

### Body
    .top-section.color-white
        .container
            h1.title.title_large.color-white Vulpem style guide
            div#styleguides(sg-content)  
    
    