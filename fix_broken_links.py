import os, glob, re

deleted_pages = [
    "360-degree-liposuction.html", "arm-lift-surgery.html", "body.html", 
    "breast-augmentation.html", "breast-implant-surgery.html", "breast-lift-surgery.html", 
    "breast-size-reduction-surgery.html", "breast-size-reduction.html", "breast.html", 
    "chin-augmentation.html", "cosmetic-body-surgery.html", "dimpleplasty.html", 
    "double-chin-reduction.html", "ear-lobe-repair.html", "earlobe-repair-surgery.html", 
    "eye-bags-removal-blepharoplasty.html", "face-sliming.html", "face.html", 
    "facelift-surgery.html", "facial-fat-grafting.html", "fat-dissolving-injections.html", 
    "gynecomastia-surgery-Theni.html", "gynaecomastia.html", "hair-transplant-treatment.html", 
    "laser-hair-removal.html", "lip-reduction.html", "liposuction-surgery-Theni.html", 
    "liposuction-surgery.html", "liposuction.html", "love-handle-reduction-hip-liposuction.html", 
    "mastopexy-breast-surgery.html", "otoplasty-ear-pinning.html", "plastic-face-surgery.html", 
    "prp-gfc-hair-treatment.html", "rhinoplasty-nose-reshape-surgery.html", 
    "rhinoplasty-nose-reshape.html", "saddle-bag-side-thigh-fat-removal.html", 
    "saddlebag-thigh-fat-removal-treatment.html", "scar-removal-treatment.html", 
    "scar-treatments.html", "thigh-fat-reduction.html", "thigh-reduction-liposuction.html", 
    "thread-lift-treatment.html", "tummy-tuck-abdominoplasty.html", "dermal-filler.html", 
    "age-reversal.html", "botox-injection-treatment-Theni.html", "mesotherapy.html"
]

count = 0
for filepath in glob.glob("*.html"):
    with open(filepath, "r") as f:
        content = f.read()
    
    original_content = content
    for page in deleted_pages:
        # replace case insensitive exact match for href="<page>"
        pattern = re.compile(f'href=[\"\']{page}[\"\']', re.IGNORECASE)
        content = pattern.sub('href="#"', content)
        
        # also handle some absolute URLs
        pattern_abs = re.compile(f'href=[\"\']https://araaesthetics.in/.*?[\"\']', re.IGNORECASE)
        # Wait, I shouldn't blindly replace all absolute URLs, just specific ones like 360-degree-liposuction
        
    content = re.sub(r'href="https://araaesthetics\.in/360-degree-liposuction-surgery\.php"', 'href="#"', content)
    
    if content != original_content:
        with open(filepath, "w") as f:
            f.write(content)
        count += 1

print(f"Updated links in {count} files")
