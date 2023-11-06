const rg_btn = document.getElementById("readmore_RG");
const rg_btn1 = document.getElementById("readmore_RG1");
const rg_btn2 = document.getElementById("readmore_RG2");
const rg_btn3 = document.getElementById("readmore_RG3");
const rg_btn4 = document.getElementById("readmore_RG4");
const rg_btn5 = document.getElementById("readmore_RG5");
let isExpanded = false;
let isExpanded1 = false;
let isExpanded2 = false;
let isExpanded3 = false;
let isExpanded4 = false;
let isExpanded5 = false;

const rgcontent = document.getElementById("rgcontent");
const rgcontenttext = document.getElementById("rgcontenttext");
const rgimg = document.getElementById("rgimg");


rg_btn.addEventListener("click", function () {
    isExpanded = !isExpanded;
    if (isExpanded) {
        rg_btn.textContent = "Hide";
        rgimg.classList.add('imgRGrm');
        rgcontent.classList.add('contentRGexpand');

        rgcontenttext.textContent = "Handwritten shopping list scanning using image processing is a cutting-edge technology that streamlines the process of creating and managing shopping lists. By leveraging image processing techniques, this system allows users to capture and digitize handwritten shopping lists, transforming them into easily readable and shareable digital formats. It offers a convenient and efficient solution for consumers who prefer the traditional method of jotting down their grocery needs on paper. This technology not only saves time but also enhances the overall shopping experience by enabling users to organize, edit, and share their lists with ease, ultimately reducing the chances of forgetting items and ensuring a more efficient and enjoyable shopping trip.";
    } else {
        rg_btn.textContent = "Read More";

        rgimg.classList.remove('imgRGrm');
        rgcontent.classList.remove('contentRGexpand');
        rgcontent.classList.add('cardRG_content');

        rgcontenttext.textContent = "Handwritten shopping list scanning using image processing is...";
    }
});

const rgcontent1 = document.getElementById("rgcontent1");
const rgcontenttext1 = document.getElementById("rgcontenttext1");
const rgimg1 = document.getElementById("rgimg1");


rg_btn1.addEventListener("click", function () {
    isExpanded1 = !isExpanded1;
    if (isExpanded1) {
        rg_btn1.textContent = "Hide";
        rgimg1.classList.add('imgRGrm');
        rgcontent1.classList.add('contentRGexpand');

        rgcontenttext1.textContent = "An indoor navigation system using Augmented Reality (AR) technology is revolutionizing the way we navigate through supermarkets. By harnessing the power of AR, this innovative solution provides shoppers with real-time, interactive store maps and dynamic product information overlayed on their smartphone or AR glasses. Customers can effortlessly locate products, receive personalized promotions, and access detailed product information simply by scanning items with their devices. This technology not only enhances the shopping experience by making it more efficient and engaging but also empowers retailers to better understand customer behavior and optimize store layouts. It's a game-changer for both shoppers and supermarkets, offering a seamless and informative journey through the aisles.";
    } else {
        rg_btn1.textContent = "Read More";

        rgimg1.classList.remove('imgRGrm');
        rgcontent1.classList.remove('contentRGexpand');
        rgcontent1.classList.add('cardRG_content');

        rgcontenttext1.textContent = "An indoor navigation system using Augmented Reality (AR) technology is...";
    }
});

const rgcontent2 = document.getElementById("rgcontent2");
const rgcontenttext2 = document.getElementById("rgcontenttext2");
const rgimg2 = document.getElementById("rgimg2");


rg_btn2.addEventListener("click", function () {
    isExpanded2 = !isExpanded2;
    if (isExpanded2) {
        rg_btn2.textContent = "Hide";
        rgimg2.classList.add('imgRGrm');
        rgcontent2.classList.add('contentRGexpand');

        rgcontenttext2.textContent = "This feature allows users to interact with the system by"
            + " speaking commands, which is a huge step forward in offering"
            + " a smooth and intuitive user experience.This capability can"
            + " considerably improve usability for people who struggle with"
            + " standard interfaces.";
    } else {
        rg_btn2.textContent = "Read More";

        rgimg2.classList.remove('imgRGrm');
        rgcontent2.classList.remove('contentRGexpand');
        rgcontent2.classList.add('cardRG_content');

        rgcontenttext2.textContent = " This feature allows users to interact with the system by speaking...";
    }
});

const rgcontent3 = document.getElementById("rgcontent3");
const rgcontenttext3 = document.getElementById("rgcontenttext3");
const rgimg3 = document.getElementById("rgimg3");


rg_btn3.addEventListener("click", function () {
    isExpanded3 = !isExpanded3;
    if (isExpanded3) {
        rg_btn3.textContent = "Hide";
        rgimg3.classList.add('imgRGrm');
        rgcontent3.classList.add('contentRGexpand');

        rgcontenttext3.textContent = "Studies 1 and 2 can identify the complete text material."
            + "This implies they can identify and analyze text inside"
            + " photos in a thorough manner. This functionality is important"
            + " for jobs such as reading documents, signage, or other"
            + " text-basedinformation, as it gives users complete access"
            + " to textual content in their surroundings.";
    } else {
        rg_btn3.textContent = "Read More";

        rgimg3.classList.remove('imgRGrm');
        rgcontent3.classList.remove('contentRGexpand');
        rgcontent3.classList.add('cardRG_content');

        rgcontenttext3.textContent = "Studies 1 and 2 can identify the complete text material. This implies...";
    }
});

const rgcontent4 = document.getElementById("rgcontent4");
const rgcontenttext4 = document.getElementById("rgcontenttext4");
const rgimg4 = document.getElementById("rgimg4");


rg_btn4.addEventListener("click", function () {
    isExpanded4 = !isExpanded4;
    if (isExpanded4) {
        rg_btn4.textContent = "Hide";
        rgimg4.classList.add('imgRGrm');
        rgcontent4.classList.add('contentRGexpand');

        rgcontenttext4.textContent = "This function is extremely useful for blind individuals"
            + " since it allows them to hear information. This not only"
            + " makes it easy to understand the material, but it also"
            + " encourages independence by removing the need for support from others."
            + " This implies they can identify and analyze text inside photos in a thorough"
            + " manner. This functionality is important for jobs such as reading documents,"
            + " signage, or other text-based information, as it gives users complete access"
            + " to textual content in their surroundings.";
    } else {
        rg_btn4.textContent = "Read More";

        rgimg4.classList.remove('imgRGrm');
        rgcontent4.classList.remove('contentRGexpand');
        rgcontent4.classList.add('cardRG_content');

        rgcontenttext4.textContent = "This function is extremely useful for blind individuals since it allows...";
    }
});

const rgcontent5 = document.getElementById("rgcontent5");
const rgcontenttext5 = document.getElementById("rgcontenttext5");
const rgimg5 = document.getElementById("rgimg5");


rg_btn5.addEventListener("click", function () {
    isExpanded5 = !isExpanded5;
    if (isExpanded5) {
        rg_btn5.textContent = "Hide";
        rgimg5.classList.add('imgRGrm');
        rgcontent5.classList.add('contentRGexpand');

        rgcontenttext5.textContent = " The simplicity of use and portability of the assistive technology are"
            + " enhanced by this platform option, enabling users to carry it with them wherever they"
            + " go. offer a wide range of traits that are geared toward the needs of those with"
            + " vision impairments.";
    } else {
        rg_btn5.textContent = "Read More";

        rgimg5.classList.remove('imgRGrm');
        rgcontent5.classList.remove('contentRGexpand');
        rgcontent5.classList.add('cardRG_content');

        rgcontenttext5.textContent = " The simplicity of use and portability of the assistive technology are enhanced...";
    }
});
