import os, re

services = {
    "skin-lightening.html": "Skin Lightening",
    "pimple-treatment.html": "Pimple Treatment",
    "face-lifting.html": "Face Lifting",
    "open-pores-treatment.html": "Open Pores Treatment",
    "carbon-laser.html": "Carbon Laser",
    "under-eye-treatment.html": "Under Eye Treatment",
    "q-switch-tattoo-removal.html": "Q-Switch Tattoo Removal",
    "hair-spa.html": "Hair Spa",
    "smoothening-straightening.html": "Smoothening & Straightening",
    "anti-hair-fall-treatment.html": "Anti Hair Fall Treatment",
    "keratin-treatment.html": "Keratin Treatment",
    "botox-treatment.html": "Botox Treatment",
    "d-tan.html": "D-Tan",
    "whitening.html": "Whitening",
    "peel-off-mask.html": "Peel Off Mask",
    "face-cleanup.html": "Face Cleanup",
    "leg-d-tan.html": "Leg D-Tan",
    "hand-d-tan.html": "Hand D-Tan",
    "advanced-body.html": "Advanced Body Treatment"
}

with open("about-us.html", "r") as f:
    content = f.read()

parts = content.split("<main>")
header_part = parts[0] + "<main>\n"
footer_part = "</main>" + content.split("</main>")[1]

count = 0
for filename, title in services.items():
    if os.path.exists(filename):
        continue
    
    main_content = f"""<section class="lorange surgical about sub-banner">
    <div class="container pb0 snavh">
       <ul class="breadcrumb w80" itemscope="" itemtype="https://schema.org/BreadcrumbList">
            <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Home</span>
            <meta itemprop="position" content="1"></a></li>
              <li class="active" itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
            <a itemprop="item" href="#"><span itemprop="name">{title}</span>
              <meta itemprop="position" content="2"></a></li>
        </ul>
    </div> 
     <div class="container pb0 vcenter">
        <div class="w80">
        <div class="bshape">
        <h1 class="mb1 ch1">{title}</h1>
        <p class="f20">Details about {title} will be updated soon.</p>
        </div></div>
    </div>   
</section>
<section class="pspace">
    <div class="container">
        <div class="abtus w80">
            <div class="abtinfo w-100" style="width: 100%;">
                <h2>{title} coming soon.</h2>
                <p>We are currently updating our website content. Please contact us to learn more about {title}.</p>
            </div>
        </div>
    </div>
</section>
"""
    page = header_part + main_content + footer_part
    page = re.sub(r'<title>.*?</title>', f'<title>{title} - Ara Aesthetics</title>', page)
    with open(filename, "w") as f:
        f.write(page)
    count += 1
print(f"Created {count} new pages.")
