import re

# Read the template file (about-us.html is our base because it has the correct header/nav/footer)
with open('about-us.html', 'r') as f:
    template = f.read()

# Define the new content for main section
new_main_content = """
<main>
<section class="lorange">
    <div class="container pb0">
       <ul class="breadcrumb w80" itemscope="" itemtype="https://schema.org/BreadcrumbList">
            <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Home</span>
            <meta itemprop="position" content="1"></a></li>
              <li class="active" itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
            <a itemprop="item" role="button"><span itemprop="name">Skin Treatments</span>
              <meta itemprop="position" content="2"></a></li>
                <li class="active" itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
            <span itemprop="name">Hydra Facial</span>
            <meta itemprop="position" content="3"></li>
        </ul>
    </div>  
</section>
<section class="pspace pt20 treatmentsec lrpattern">
    <div class="container">
       <div class="grid2 w80">
           <div>
                <h2 class="ch2 mb2">Hydra Facial</h2>
        <p>A Hydra Facial is a non-invasive, multi-step skin treatment that combines cleansing, exfoliation, extraction, hydration, and antioxidant protection in a single session. This rejuvenating procedure delivers immediate, visible results with no downtime, leaving your skin deeply hydrated, plump, and glowing.</p>
           </div>
           <div>
              <div class="tslider mt6 carrows owl-carousel">
		  <div>
		      <img src="images/hydrafacial.webp" alt="Hydra Facial Treatment">
		  </div>
           </div>
           </div>
       </div>
        </div>
</section>
<section class="slinkbg stickylinks">
<div class="icos w80">
<div class="container">
<ul class="snav">
    <li><a href="#what-is-it">What is it?</a></li>
     <li><a href="#benefits">Benefits</a></li>
      <li><a href="#faq">FAQ</a></li>
       <li><a href="#gallery">Gallery</a></li>
</ul></div></div>
</section>
<section class="pspace pb0">
    <div class="container">
       <div class="tdetails w80">
        <div>
            <p class="mb1">The Hydra Facial uses a unique, patented Vortex-Fusion delivery system to exfoliate, extract, and hydrate skin, and the spiral design delivers painless extractions. It effectively targets fine lines, wrinkles, congested pores, and hyperpigmentation.</p>
          <p class="mb40">At Ara Aesthetics, we customize every Hydra Facial treatment with specific booster serums tailored to address your unique skin concerns, ensuring optimal and long-lasting results.</p>
           <h2 class="mb1 ch3" id="what-is-it">What happens during a Hydra Facial?</h2>
           <p class="mb2">The treatment consists of several key steps:</p>
           <ul class="bullet mb40">
               <li><strong>Cleanse & Peel:</strong> Uncovers a new layer of skin with gentle exfoliation and relaxing resurfacing.</li>
               <li><strong>Extract & Hydrate:</strong> Removes debris from pores with painless suction. Nourishes with intense moisturizers that quench skin.</li>
               <li><strong>Fuse & Protect:</strong> Saturates the skin's surface with antioxidants and peptides to maximize your glow.</li>
           </ul>
             <h2 class="mb1 ch3" id="benefits">Benefits of Hydra Facial</h2>
             <ul class="bullet g2 mb40">
                <li>Deeply cleanses and exfoliates</li>
                <li>Painless extraction of blackheads</li>
                <li>Intense hydration and plumping</li>
                <li>Improves skin tone and texture</li>
                <li>Reduces appearance of fine lines</li>
                <li>No downtime required</li>
            </ul>
        <h2 class="ch3 mb1" id="faq">FAQ</h2>
        <div class="schema-faq-code faqs-container">
          <div class="faq-singular active" itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
             <h3 class="faq-question" itemprop="name">
                 <i class="fa fa-plus"></i>
               <span>How long does the treatment take?</span>
             </h3> 
           <div class="faq-answer" itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" style="display:block">
               <div itemprop="text">
                 <p>A standard Hydra Facial treatment usually takes about 30 to 45 minutes, making it a perfect lunchtime procedure.</p>
              </div>
          </div>
        </div>
        <div class="faq-singular" itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
             <h3 class="faq-question" itemprop="name">
                 <i class="fa fa-plus"></i>
               <span>When will I see results?</span>
             </h3> 
           <div class="faq-answer" itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
               <div itemprop="text">
                 <p>Many clients report seeing visible skin refinement and an even, radiant skin tone after just one treatment. The smooth results and hydration may last 5 to 7 days or even longer.</p>
              </div>
          </div>
        </div>
 </div>
         </div>
        <div class="dpcta mt6">
            <div class="lgrey mb6">
              <h2 class="ch2 mb3">To schedule your consultation for a Hydra Facial at <span class="hcspan">Ara Aesthetics.</span></h2>
              <div class="mb2">
                  <h3 class="pink dmsans">Opening Hours</h3>
                  <p class="tblack htime"><span>Monday to Saturday</span><span>09:00 AM - 08:00 PM</span></p>
              </div>
             <p><a href="book-appointment.html" class="cbtn cbtnr active"><span>Book Appointment</span></a></p> 
            </div>
          </div>
        </div>
        </div>
</section>
</main>
"""

# Replace content between <main> and </main>
pattern = re.compile(r'<main>.*?</main>', re.DOTALL)
new_content = pattern.sub(new_main_content, template)

# Also update the title
new_content = re.sub(r'<title>.*?</title>', '<title>Hydra Facial Treatment | Ara Aesthetics</title>', new_content)

with open('hydra-facial.html', 'w') as f:
    f.write(new_content)

print("Created hydra-facial.html")
