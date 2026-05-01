const renderCards = (cardsContainer, items) => {
    cardsContainer.innerHTML = "";

    items.forEach((item, index) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("col", "fade-in");

        if (item.before && item.after) {
            // Grouped Before/After Card
            cardElement.innerHTML = `
                <div class="card border-0 bg-transparent position-relative ba-card">
                    <div class="card-body p-0">
                        <div class="ba-container">
                            <div class="ba-item before">
                                <span class="ba-label">Before</span>
                                <img src="../${item.before}" class="shadow-sm rounded cover-image w-100" alt="Before">
                            </div>
                            <div class="ba-item after">
                                <span class="ba-label">After</span>
                                <img src="../${item.after}" class="shadow-sm rounded cover-image w-100" alt="After">
                            </div>
                        </div>
                        <h3 class="treatment-name">${item.treatment}</h3>
                    </div>
                </div>
            `;
        } else {
            // Single Image Card (for remaining images)
            cardElement.innerHTML = `
                <div class="card border-0 bg-transparent position-relative">
                    <div class="card-body p-0">
                        <div class="imgh">
                            <div class="nimg mb1">
                                <img src="../${item.image}" class="shadow-sm rounded cover-image w-100" alt="Gallery Image">
                            </div>
                        </div>
                        ${item.treatment ? `<h3 class="treatment-name">${item.treatment}</h3>` : ""}
                    </div>
                </div>
            `;
        }

        cardsContainer.appendChild(cardElement);

        setTimeout(() => {
            cardElement.classList.add("show");
        }, index * 20);
    });
};

const data = {
    items: [
        { treatment: "Hydrafacial", before: "images/before&after/Untitled design (3).png", after: "images/before&after/Untitled design (4).png" },
        { treatment: "Hydrafacial", before: "images/before&after/Untitled design (5).png", after: "images/before&after/Untitled design (6).png" },
        { treatment: "Pimple Treatment", before: "images/before&after/Untitled design (7).png", after: "images/before&after/Untitled design (8).png" },
        { treatment: "Pigmentation Therapy", before: "images/before&after/Untitled design (9).png", after: "images/before&after/Untitled design (10).png" },
        { treatment: "HydraFacial", before: "images/before&after/Untitled design (11).png", after: "images/before&after/Untitled design (12).png" },
        { treatment: "Ultrasonic", before: "images/before&after/Untitled design (13).png", after: "images/before&after/Untitled design (14).png" },
        { treatment: "Hydrafacial", before: "images/before&after/Untitled design (15).png", after: "images/before&after/Untitled design (16).png" },
        { treatment: "Laser Resurfacing", before: "images/before&after/Untitled design (17).png", after: "images/before&after/Untitled design (18).png" },
        { treatment: "Microneedling Rejuvenation", before: "images/before&after/Untitled design (19).png", after: "images/before&after/Untitled design (20).png" },
        { treatment: "Carbon laser", before: "images/before&after/Untitled design (24).png", after: "images/before&after/Untitled design (25).png" },
        { treatment: "HydraFacial Therapy", before: "images/before&after/Untitled design (26).png", after: "images/before&after/Untitled design (27).png" },
        { treatment: "Hydra facial", before: "images/before&after/Untitled design (28).png", after: "images/before&after/Untitled design (29).png" },
        { treatment: "Under eye darkness removal", before: "images/before&after/Untitled design (34).png", after: "images/before&after/Untitled design (35).png" },
        { treatment: "Hydrafacial", before: "images/before&after/Untitled design (36).png", after: "images/before&after/Untitled design (37).png" },
        { treatment: "Hydrafacial", before: "images/before&after/Untitled design (38).png", after: "images/before&after/Untitled design (39).png" },
        { treatment: "Pimple Treatment", before: "images/before&after/Untitled design (40).png", after: "images/before&after/Untitled design (41).png" },
        { treatment: "Cheek Contouring", before: "images/before&after/Untitled design (42).png", after: "images/before&after/Untitled design (43).png" },
        { treatment: "Neck Skin Tightening", before: "images/before&after/Untitled design (45).png", after: "images/before&after/Untitled design (46).png" },

        // Remaining Single Images (Many are already Before/After collages)
        { treatment: "Laser Hair Removal", image: "images/before&after/Untitled design (44).png" },
        { treatment: "Skin Lightening System", image: "images/before&after/Untitled design (47).png" },
        { treatment: "Pimple Treatment", image: "images/before&after/Untitled design (48).png" },
        { treatment: "Hair straightening", image: "images/before&after/WhatsApp Image 2026-04-25 at 4.21.19 PM (1).jpeg" },
        { treatment: "Hair straightening", image: "images/before&after/WhatsApp Image 2026-04-25 at 4.21.19 PM (2).jpeg" },
        { treatment: "GFC Hair Treatment", image: "images/before&after/WhatsApp Image 2026-04-25 at 4.42.59 PM.jpeg" },
        { treatment: "Underarm Darkness Removal", image: "images/before&after/WhatsApp Image 2026-04-25 at 4.43.00 PM (1).jpeg" },
        { treatment: "Leg Tan Removal", image: "images/before&after/WhatsApp Image 2026-04-25 at 4.43.01 PM.jpeg" },
        { treatment: "Neck Tan Removal", image: "images/before&after/WhatsApp Image 2026-04-25 at 4.43.02 PM.jpeg" },
        { treatment: "Hair Straightening", image: "images/before&after/WhatsApp Image 2026-04-26 at 1.16.20 PM.jpeg" },
        { treatment: "GFC Hair Treatment", image: "images/before&after/WhatsApp Image 2026-04-26 at 1.16.21 PM (1).jpeg" },
        { treatment: "Keratin Treatment", image: "images/before&after/WhatsApp Image 2026-04-26 at 1.16.37 PM (1).jpeg" },
        { treatment: "Hair Straightening", image: "images/before&after/WhatsApp Image 2026-04-26 at 1.16.37 PM (2).jpeg" },
        { treatment: "Knee Pigmentation Therapy", image: "images/before&after/WhatsApp Image 2026-04-26 at 1.16.38 PM (1).jpeg" },
        { treatment: "Neck Darkness Correction", image: "images/before&after/WhatsApp Image 2026-04-26 at 1.16.39 PM.jpeg" },
        { treatment: "Underarm Brightening", image: "images/before&after/WhatsApp Image 2026-04-26 at 1.16.44 PM.jpeg" },
        { treatment: "Acne Control System", image: "images/before&after/WhatsApp Image 2026-04-26 at 1.16.46 PM.jpeg" },
        { treatment: "Professional Hair Spa", image: "images/before&after/WhatsApp Image 2026-04-26 at 1.16.47 PM.jpeg" },
        { treatment: "Hand Tan Removal", image: "images/before&after/WhatsApp Image 2026-04-26 at 1.16.49 PM (2).jpeg" },
        { treatment: "Hair Straightening", image: "images/before&after/WhatsApp Image 2026-04-26 at 1.16.51 PM.jpeg" },
        { treatment: "Hair Straightening", image: "images/before&after/WhatsApp Image 2026-04-26 at 1.16.52 PM (1).jpeg" },
        { treatment: "Hair straightening", image: "images/before&after/WhatsApp Image 2026-04-26 at 1.16.52 PM.jpeg" }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.getElementById("cards-container");
    if (cardsContainer) {
        renderCards(cardsContainer, data.items);
    }
});
